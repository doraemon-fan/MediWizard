require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const healthRoutes = require("./routes/healthRoutes");
const cors = require("cors");

const predictRoutes = require("./routes/predictRoutes");
const skinRoutes = require("./routes/skinRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🌐 Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mediwizard";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));


// Routes

// app.use("/api/predict", predictRoutes);
app.use("/api/skin", skinRoutes);
app.use("/api", healthRoutes);

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
