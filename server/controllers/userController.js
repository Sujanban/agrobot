const User = require("../models/user.model");

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
        const { id,role } = req.body;
        const user = await User.findById(id);
        user.role = role;
        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.json({message: 'User deleted Successfully'});
        } else{
            res.json({error: 'User not found'});
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = { getUsers, editUser, deleteUser };