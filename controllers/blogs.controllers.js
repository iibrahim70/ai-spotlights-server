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
  const title = req.params.title;
  const formattedTitle = title.replace(/-/g, " ");
  const result = await blogModels.findOne({ title: formattedTitle });
  res.send(result);
};

const updateBlogs = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updateBlogs = {
    $set: {
      title: body.title,
      subtitle: body.subtitle,
      tags: body.tags,
      toolsImage: body.toolsImage,
      ratings: body.ratings,
      description: body.description,
      websiteLink: body.websiteLink,
      youtubeLink: body.youtubeLink,
      facebookLink: body.facebookLink,
      discordLink: body.discordLink,
      twitterLink: body.twitterLink,
      linkedinLink: body.twitterLink,
      videoReviewLink: body.videoReviewLink,
    },
  };
  const result = await blogModels.findByIdAndUpdate(id, updateBlogs);
  res.send(result);
};

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
