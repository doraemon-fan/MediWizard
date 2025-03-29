const mongoose = require("mongoose");

// 🩺 Define Schema for Health Record
const healthRecordSchema = new mongoose.Schema(
  {
    heartRate: { type: Number, required: true },
    respiratoryRate: { type: Number, required: true },
    bodyTemperature: { type: Number, required: true },
    oxygenSaturation: { type: Number, required: true },
    systolicBP: { type: Number, required: true },
    diastolicBP: { type: Number, required: true },
    prediction: { type: String, required: true }, // 🎯 Prediction Result
  },
  { timestamps: true }
);

const HealthRecord = mongoose.model("HealthRecord", healthRecordSchema);
module.exports = HealthRecord;
