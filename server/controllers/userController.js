const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

const editUser = async (req, res) => {
  try {
    const id = req.body._id;
    const {username, email, password, role } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    console.log('user updated sucessfully!')
    res.json(user);
  } catch (err) {
    console.log(err);
    res.json({ error: "Server Error!" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.json({ message: "User deleted Successfully" });
    } else {
      res.json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUsers, editUser, deleteUser };
