const { Router } = require("express");

const userRoutes = Router();

const userControler = require("../controllers/user-controler");

userRoutes.get("/user", userControler.getAllUsers);

userRoutes.get("/user/:id", userControler.getUserByID);

userRoutes.post("/user", userControler.createUser);

userRoutes.put("/user/:id", userControler.updateUser);

userRoutes.delete("/user/:id", userControler.deleteUser);

module.exports = userRoutes;
