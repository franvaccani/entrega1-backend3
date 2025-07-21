const User = require("../models/User");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
};

module.exports = {
  getAllUsers,
  createUser,
};