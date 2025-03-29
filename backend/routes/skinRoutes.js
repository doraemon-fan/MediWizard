const express = require("express");
const multer = require("multer");
const { analyzeSkinImage } = require("../controllers/skinController");

const router = express.Router();

// Multer config for file upload
const upload = multer({ dest: "uploads/" });

// POST: Analyze skin image
router.post("/", upload.single("skinImage"), analyzeSkinImage);

module.exports = router;
