import axios from "axios";

// 🌐 Base URL for Backend API
const API_URL = "http://localhost:8000/api";

// 📡 Fetch All Health Records
export const getAllRecords = async () => {
  try {
    const response = await axios.get(`${API_URL}/records`);
    return response.data; // 🎯 Return records if successful
  } catch (error) {
    console.error("❌ Error fetching records:", error);
    return []; // 🛑 Return empty array if error
  }
};
