const express = require("express");
const router = express.Router();
const HealthRecord = require("../models/healthRecord");

// 🎯 Save New Health Record
router.post("/records", async (req, res) => {
  try {
    const newRecord = new HealthRecord(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json({ message: "Record saved successfully!", data: savedRecord });
  } catch (err) {
    console.error("Error saving record:", err);
    res.status(500).json({ error: "Failed to save record" });
  }
});

// 📚 Get All Health Records
router.get("/records", async (req, res) => {
  try {
    const records = await HealthRecord.find().sort({ createdAt: -1 });
    res.status(200).json(records);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

module.exports = router;
