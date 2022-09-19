require("dotenv").config();
const express = require("express");
const userRoutes = require("../routes/user");
const app = express();

app.use(express.json());

app.use(userRoutes);

module.exports = app;
