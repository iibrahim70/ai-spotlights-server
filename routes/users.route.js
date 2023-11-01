const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  creatUsers,
  makeAdmin,
  makeUser,
} = require("../controllers/users.controllers");

usersRouter.get("/", getAllUsers);
usersRouter.post("/", creatUsers);
usersRouter.patch("/make-admin/:id", makeAdmin);
usersRouter.patch("/remove-admin/:id", makeUser);

module.exports = usersRouter;
