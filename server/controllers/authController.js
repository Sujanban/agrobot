const User = require("../models/user.model");
const bcrypt = require("bcrypt");
var validator = require("email-validator");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.json({ error: "All fields are required" });
    }

    if (!validator.validate(email)) {
      return res.status(400).json({ error: "Invalid email format" });
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
    if (!email || !password) {
      return res.json({ error: "All fields are required" });
    }
  } catch (err) {
    res.json({ error: "Server Error!" });
  }
};

module.exports = { register };
