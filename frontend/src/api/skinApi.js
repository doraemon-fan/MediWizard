import axios from "axios";

// 🌐 Base URL for ML API
const API_URL = "http://localhost:8000/api";

// 📡 Upload Image & Get Prediction (Currently Commented Out)
export const analyzeSkin = async (formData) => {
  try {
    // Uncomment when ready to integrate actual ML API
    // const response = await axios.post(`${API_URL}/analyze`, formData);
    // return response.data.prediction;

    // 🎯 Dummy Prediction for Testing
    const dummyDiseases = [
      "Acne Vulgaris",
      "Psoriasis",
      "Eczema",
      "Melanoma",
      "Healthy Skin",
    ];
    const randomPrediction =
      dummyDiseases[Math.floor(Math.random() * dummyDiseases.length)];
    return randomPrediction;
  } catch (error) {
    console.error("❌ Error analyzing skin:", error);
    return "Unknown Condition";
  }
};
