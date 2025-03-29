const { generatePrediction } = require("../models/mockData");

const analyzeVitals = (req, res) => {
  try {
    const data = req.body;
    const result = generatePrediction(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error analyzing vitals" });
  }
};

module.exports = { analyzeVitals };
