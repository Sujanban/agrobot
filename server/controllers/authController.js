const User = require("../models/user.model");
const bcrypt = require("bcrypt");
var validator = require("email-validator");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password, cpassword } = req.body;
    if (!username || !email || !password || !cpassword) {
      return res.json({ error: "All fields are required" });
    }
    if(password != cpassword){
      return res.json({ error: "Passwords do not match" });
    }

    if (!validator.validate(email)) {
      return res.json({ error: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({ error: "User already exists. Please login" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.json({ error: "Server Error!" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.json({ error: "All fields are required" });
    }

    if (!validator.validate(email)) {
      return res.json({ error: "Invalid email format" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User does not exist. Please register" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ error: "Invalid credentials. Please try again" });
    }

    // jwt
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    const userData = await User.findById(user._id).select("-password");

    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login successful", user: userData });
  } catch (err) {
    console.log(err);
    res.json({ error: "Server Error!" });
  }
};

module.exports = { register, login };
