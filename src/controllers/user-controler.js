const userService = require("../services/user-service");

const getAllUsers = async (req, res) => {
  const users = await userService.findAllUsers();
  res.send(users);
};

const getUserByID = async (req, res) => {
  const id = req.params.id;
  const user = await userService.findUserById(id);

  res.send(user);
};

const createUser = async (req, res) => {
  const { name, age } = req.body;
  const user = await userService.createUser(name, age);
  res.status(201).send(user);
};

const updateUser = async (req, res) => {
  const { name, age } = req.body;
  const id = req.params.id;

  const user = await userService.updateUser(id, name, age);

  res.send(user);
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const users = await userService.deleteUser(id);

  res.send(users);
};
module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
};
