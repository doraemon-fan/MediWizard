const express = require("express");
const { analyzeVitals } = require("../controllers/predictController");

const router = express.Router();

// POST: Predict health risks based on vitals
router.post("/", analyzeVitals);

module.exports = router;
