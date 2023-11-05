const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    websiteLink: {
      type: String,
      required: true,
    },
    toolsImage: {
      type: String,
      required: true,
    },
    facebookLink: {
      type: String,
      required: false,
    },
    instagramLink: {
      type: String,
      required: false,
    },
    twitterLink: {
      type: String,
      required: false,
    },
    linkedinLink: {
      type: String,
      required: false,
    },
    ratings: {
      type: Number,
      default: 4.9,
    },
    status: {
      type: String,
      default: "pending",
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tool", toolSchema);
