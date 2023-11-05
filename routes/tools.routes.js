const express = require("express");
const {
  getAllTools,
  getApproveTools,
  getFeaturedTools,
  getMyTools,
  getSingleTools,
  createTools,
  approveTools,
  denyTools,
  verifyTools,
  unverifyTools,
  featuredTools,
  unfeaturedTools,
  updateTools,
  deleteTools,
} = require("../controllers/tools.controllers");
const { verifyJWT, verifyAdmin } = require("../middlewares/auth.middleware");

const toolsRouter = express.Router();

// admin routes
toolsRouter.get("/", verifyJWT, verifyAdmin, getAllTools);
toolsRouter.patch("/approve-tools/:id", verifyJWT, verifyAdmin, approveTools);
toolsRouter.patch("/deny-tools/:id", verifyJWT, verifyAdmin, denyTools);
toolsRouter.patch("/verify-tools/:id", verifyJWT, verifyAdmin, verifyTools);
toolsRouter.patch("/unverify-tools/:id", verifyJWT, verifyAdmin, unverifyTools);
toolsRouter.patch("/feature-tools/:id", verifyJWT, verifyAdmin, featuredTools);
toolsRouter.patch(
  "/unfeature-tools/:id",
  verifyJWT,
  verifyAdmin,
  unfeaturedTools
);

// user routes
toolsRouter.get("/featured-tools", getFeaturedTools);
toolsRouter.get("/approved-tools", getApproveTools);
toolsRouter.get("/my-tools", verifyJWT, getMyTools);
toolsRouter.get("/:id", getSingleTools);
toolsRouter.post("/", verifyJWT, createTools);
toolsRouter.put("/:id", verifyJWT, updateTools);
toolsRouter.delete("/my-tools/:id", verifyJWT, deleteTools);

module.exports = toolsRouter;
