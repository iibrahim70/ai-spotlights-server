const express = require("express");
const { createJWT, checkAdmin } = require("../controllers/auth.controllers");
const { verifyJWT } = require("../middlewares/auth.middleware");
const authRouter = express.Router();

// admin role check route
authRouter.get("/admin/:email", verifyJWT, checkAdmin);

// jwt token create route
authRouter.post("/jwt", createJWT);

module.exports = authRouter;
