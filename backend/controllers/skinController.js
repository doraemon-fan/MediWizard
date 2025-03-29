const { analyzeSkin } = require("../models/mockData");

const analyzeSkinImage = (req, res) => {
  try {
    const fileName = req.file.filename;
    const result = analyzeSkin(fileName);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error analyzing skin image" });
  }
};

module.exports = { analyzeSkinImage };
