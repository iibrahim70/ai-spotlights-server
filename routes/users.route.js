const express = require("express");
const usersRouter = express.Router();
const { getAllUsers, creatUsers } = require("../controllers/users.controllers");

usersRouter.get("/", getAllUsers);
usersRouter.post("/", creatUsers);

module.exports = usersRouter;
