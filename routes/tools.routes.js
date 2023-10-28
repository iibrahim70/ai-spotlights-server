const express = require("express");
const router = express.Router();
const {
  getAllTools,
  getMyTools,
  createTools,
  deleteTools,
} = require("../controllers/tools.controllers");

router.get("/", getAllTools);
router.get("/my-tools", getMyTools);
router.post("/", createTools);
router.delete("/my-tools/:id", deleteTools);

module.exports = router;
