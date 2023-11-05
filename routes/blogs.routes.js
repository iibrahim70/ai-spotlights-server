const express = require("express");
const { verifyJWT, verifyAdmin } = require("../middlewares/auth.middleware");
const { createBlogs } = require("../controllers/blogs.controllers");

const blogsRouter = express.Router();

// admin routes
blogsRouter.post("/", verifyJWT, verifyAdmin, createBlogs);

module.exports = blogsRouter;
