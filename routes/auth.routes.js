const express = require("express");
const createJWT = require("../controllers/auth.controllers");
const jwtRouter = express.Router();

jwtRouter.post("/", createJWT);

module.exports = jwtRouter;
