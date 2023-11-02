const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  creatUsers,
  makeAdmin,
  makeUser,
} = require("../controllers/users.controllers");
const { verifyJWT, verifyAdmin } = require("../middlewares/auth.middleware");

// admin routes
usersRouter.get("/", verifyJWT, verifyAdmin, getAllUsers);
usersRouter.patch("/make-admin/:id", verifyJWT, verifyAdmin, makeAdmin);
usersRouter.patch("/remove-admin/:id", verifyJWT, verifyAdmin, makeUser);

// user routes
usersRouter.post("/", creatUsers);

module.exports = usersRouter;
