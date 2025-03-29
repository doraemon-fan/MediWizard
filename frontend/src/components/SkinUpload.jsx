import { useState, useEffect } from "react";
import "../styles/skinUpload.css";

const SkinUpload = () => {
  // 🌟 State for Uploaded Image, Prediction, and Loading
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false); // 🔍 New State for Analysis

  // 📸 Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // 🔗 Create Image Preview URL
      setPrediction(""); // Clear previous prediction
      setIsAnalyzing(true); // 🚀 Start Analyzing Effect

      // 🎯 Dummy Prediction for Testing (Commented ML API for Now)
      setTimeout(() => {
        const dummyDiseases = [
          "Acne Vulgaris",
          "Psoriasis",
          "Eczema",
          "Melanoma",
          "Healthy Skin",
        ];
        const randomPrediction =
          dummyDiseases[Math.floor(Math.random() * dummyDiseases.length)];
        setPrediction(randomPrediction); // ✅ Update Prediction
        setIsAnalyzing(false); // 🛑 Stop Animation
      }, 3000); // ⏳ Simulate Delay of 3s
    }
  };

  return (
    <div className="skin-upload-container">
      <h2 className="upload-title">🪞 Magic Mirror: Skin Analysis</h2>

      {/* 📸 Upload Button */}
      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* 🖼️ Display Uploaded Image */}
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Uploaded Preview" />
          {isAnalyzing && (
            <div className="scanner-overlay">
              <div className="scanner-line"></div>
            </div>
          )}
        </div>
      )}

      {/* 🔍 Show Analyzing Effect */}
      {isAnalyzing && (
        <div className="analyzing-animation">
          <p>🔎 Analyzing Skin Condition...</p>
        </div>
      )}

      {/* 🔮 Display Prediction Result */}
      {prediction && !isAnalyzing && (
        <div
          className={`prediction-box ${
            prediction === "Healthy Skin" ? "healthy" : "alert"
          }`}
        >
          <h3>🔍 Detected Condition:</h3>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default SkinUpload;
