const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  creatUsers,
  makeAdmin,
  makeUser,
} = require("../controllers/users.controllers");
const { verifyJWT } = require("../middlewares/auth.middleware");

usersRouter.get("/", verifyJWT, getAllUsers);
usersRouter.post("/", creatUsers);
usersRouter.patch("/make-admin/:id", verifyJWT, makeAdmin);
usersRouter.patch("/remove-admin/:id", verifyJWT, makeUser);

module.exports = usersRouter;
