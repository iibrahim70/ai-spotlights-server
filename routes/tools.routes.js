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
const { verifyJWT } = require("../middlewares/auth.middleware");

toolsRouter.get("/", verifyJWT, getAllTools);
toolsRouter.get("/approved-tools", getApproveTools);
toolsRouter.get("/my-tools", verifyJWT, getMyTools);
toolsRouter.get("/:id", getSingleTools);
toolsRouter.post("/", verifyJWT, createTools);
toolsRouter.patch("/approve-tools/:id", verifyJWT, approveTools);
toolsRouter.patch("/deny-tools/:id", verifyJWT, denyTools);
toolsRouter.patch("/verify-tools/:id", verifyJWT, verifyTools);
toolsRouter.patch("/unverify-tools/:id", verifyJWT, unverifyTools);
toolsRouter.delete("/my-tools/:id", verifyJWT, deleteTools);

module.exports = toolsRouter;
