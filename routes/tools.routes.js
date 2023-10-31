const express = require("express");
const toolsRouter = express.Router();
const {
  getAllTools,
  getMyTools,
  createTools,
  deleteTools,
} = require("../controllers/tools.controllers");

toolsRouter.get("/", getAllTools);
toolsRouter.get("/my-tools", getMyTools);
toolsRouter.post("/", createTools);
toolsRouter.delete("/my-tools/:id", deleteTools);

module.exports = toolsRouter;
