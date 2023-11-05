const blogModels = require("../models/blog.models");

const createBlogs = async (req, res) => {
  const result = await blogModels.create(req.body);
  res.send(result);
};

const getAllBlogs = async (req, res) => {
  const result = await blogModels.find().sort({ createdAt: -1 });
  res.send(result);
};

module.exports = { createBlogs, getAllBlogs };
