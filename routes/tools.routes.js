const express = require("express");
const router = express.Router();
const {
  getAllTools,
  createTools,
} = require("../controllers/tools.controllers");

router.get("/", getAllTools);
router.post("/", createTools);

module.exports = router;
