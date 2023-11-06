const express = require("express");
const { verifyJWT, verifyAdmin } = require("../middlewares/auth.middleware");
const {
  createBlogs,
  getAllBlogs,
  getSingleBlogs,
} = require("../controllers/blogs.controllers");

const blogsRouter = express.Router();

// admin routes
blogsRouter.post("/", verifyJWT, verifyAdmin, createBlogs);

// user routes
blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:id", getSingleBlogs);

module.exports = blogsRouter;
