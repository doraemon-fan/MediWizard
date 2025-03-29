import axios from "axios";

// Base API URL
const API_BASE_URL = "http://localhost:8000/api";

// Health Data Prediction API
export const analyzeVitals = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/predict`, formData);
    return response.data;
  } catch (error) {
    console.error("Error analyzing vitals:", error);
    return { error: "Failed to analyze health data" };
  }
};

// Skin Image Analysis API
export const analyzeSkinImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("skinImage", file);

    const response = await axios.post(`${API_BASE_URL}/skin`, formData);
    return response.data;
  } catch (error) {
    console.error("Error analyzing skin:", error);
    return { error: "Failed to analyze skin" };
  }
};
