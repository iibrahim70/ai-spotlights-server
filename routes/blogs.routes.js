const express = require("express");
const { verifyJWT, verifyAdmin } = require("../middlewares/auth.middleware");
const {
  createBlogs,
  getAllBlogs,
  getSingleBlogs,
  updateBlogs,
  deleteBlogs,
} = require("../controllers/blogs.controllers");

const blogsRouter = express.Router();

// admin routes
blogsRouter.post("/", verifyJWT, verifyAdmin, createBlogs);
// working
blogsRouter.put("/:id", verifyJWT, verifyAdmin, updateBlogs);
blogsRouter.delete("/:id", verifyJWT, verifyAdmin, deleteBlogs);

// user routes
blogsRouter.get("/", getAllBlogs);
blogsRouter.get("/:title", getSingleBlogs);

module.exports = blogsRouter;
