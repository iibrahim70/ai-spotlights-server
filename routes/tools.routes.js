const express = require("express");
const toolsRouter = express.Router();
const {
  getAllTools,
  getApproveTools,
  getMyTools,
  createTools,
  approveTools,
  denyTools,
  deleteTools,
} = require("../controllers/tools.controllers");

toolsRouter.get("/", getAllTools);
toolsRouter.get("/approve-tools", getApproveTools);
toolsRouter.get("/my-tools", getMyTools);
toolsRouter.post("/", createTools);
toolsRouter.patch("/approve-tools/:id", approveTools);
toolsRouter.patch("/deny-tools/:id", denyTools);
toolsRouter.delete("/my-tools/:id", deleteTools);

module.exports = toolsRouter;
