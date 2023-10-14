const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
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
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Tool", toolSchema);
