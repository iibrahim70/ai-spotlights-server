const blogModels = require("../models/blog.models");

const createBlogs = async (req, res) => {
  const result = await blogModels.create(req.body);
  res.send(result);
};

module.exports = { createBlogs };
