const express = require("express");
const toolsRouter = express.Router();
const {
  getAllTools,
  getApproveTools,
  getMyTools,
  getSingleTools,
  createTools,
  approveTools,
  denyTools,
  verifyTools,
  unverifyTools,
  deleteTools,
} = require("../controllers/tools.controllers");

toolsRouter.get("/", getAllTools);
toolsRouter.get("/approved-tools", getApproveTools);
toolsRouter.get("/my-tools", getMyTools);
toolsRouter.get("/:id", getSingleTools);
toolsRouter.post("/", createTools);
toolsRouter.patch("/approve-tools/:id", approveTools);
toolsRouter.patch("/deny-tools/:id", denyTools);
toolsRouter.patch("/verify-tools/:id", verifyTools);
toolsRouter.patch("/unverify-tools/:id", unverifyTools);
toolsRouter.delete("/my-tools/:id", deleteTools);

module.exports = toolsRouter;
