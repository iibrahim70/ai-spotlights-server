const blogModels = require("../models/blog.models");

const createBlogs = async (req, res) => {
  const result = await blogModels.create(req.body);
  res.send(result);
};

const getAllBlogs = async (req, res) => {
  const result = await blogModels.find().sort({ createdAt: -1 });
  res.send(result);
};

const getSingleBlogs = async (req, res) => {
  const id = req.params.id;
  const result = await blogModels.findById(id);
  res.send(result);
};

const updateBlogs = async (req, res) => {};

const deleteBlogs = async (req, res) => {
  const id = req.params.id;
  const result = await blogModels.findByIdAndDelete(id);
  res.send(result);
};

module.exports = {
  createBlogs,
  getAllBlogs,
  getSingleBlogs,
  updateBlogs,
  deleteBlogs,
};
