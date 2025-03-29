import { useState } from "react";
import "../styles/healthForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HealthForm = () => {
  const navigate = useNavigate();

  // 🌟 Form State
  const [formData, setFormData] = useState({
    heartRate: "",
    respiratoryRate: "",
    bodyTemperature: "",
    oxygenSaturation: "",
    systolicBP: "",
    diastolicBP: "",
  });

  // 🧙‍♂️ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📡 Submit Form (Save to MongoDB & Navigate)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // 🎯 Dummy Prediction for Testing
    const dummyPrediction = "Healthy - Keep Up the Good Work!";

    try {
      // ✅ Save to MongoDB with initial random prediction
      const dbApiUrl = "http://localhost:8000/api/records"; // Update if backend port changes
      await axios.post(dbApiUrl, {
        ...formData,
        prediction: dummyPrediction, // Initial placeholder prediction
      });
      console.log("✅ Data saved to MongoDB!");

      // 🎉 Navigate with Dummy Prediction
      navigate("/profile-card", {
        state: {
          prediction: dummyPrediction,
          formData: formData,
        },
      });
    } catch (error) {
      console.error("❌ Error saving data to MongoDB:", error);
    }

    // 🚫 Commented Out Actual ML Integration
    // try {
    //   const mlApiUrl = "http://localhost:8000/predict";
    //   const mlResponse = await axios.post(mlApiUrl, formData);
    //   if (mlResponse.status === 200) {
    //     const predictionString = mlResponse.data.prediction || "Unknown";
    //     const dbApiUrl = "http://localhost:5000/api/records";
    //     await axios.post(dbApiUrl, {
    //       ...formData,
    //       prediction: predictionString,
    //     });
    //     navigate("/profile-card", {
    //       state: { prediction: predictionString, formData: formData },
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error during submission:", error);
    // }
  };

  return (
    <div className="form-container">
      <div className="health-form-wrapper">
        <h1 className="form-title">🧙‍♂️ Vital Sign Analysis</h1>
        <form onSubmit={handleSubmit} className="health-form">
          {/* Heart Rate */}
          <div className="form-group">
            <label>❤️ Heart Rate (BPM)</label>
            <input
              type="number"
              name="heartRate"
              value={formData.heartRate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Respiratory Rate */}
          <div className="form-group">
            <label>🌬️ Respiratory Rate (Breaths per Minute)</label>
            <input
              type="number"
              name="respiratoryRate"
              value={formData.respiratoryRate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Body Temperature */}
          <div className="form-group">
            <label>🌡️ Body Temperature (°C)</label>
            <input
              type="number"
              name="bodyTemperature"
              value={formData.bodyTemperature}
              onChange={handleChange}
              required
            />
          </div>

          {/* Oxygen Saturation */}
          <div className="form-group">
            <label>🩸 Oxygen Saturation (%)</label>
            <input
              type="number"
              name="oxygenSaturation"
              value={formData.oxygenSaturation}
              onChange={handleChange}
              required
            />
          </div>

          {/* Systolic BP */}
          <div className="form-group">
            <label>💓 Systolic Blood Pressure (mmHg)</label>
            <input
              type="number"
              name="systolicBP"
              value={formData.systolicBP}
              onChange={handleChange}
              required
            />
          </div>

          {/* Diastolic BP */}
          <div className="form-group">
            <label>💔 Diastolic Blood Pressure (mmHg)</label>
            <input
              type="number"
              name="diastolicBP"
              value={formData.diastolicBP}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit glow-hover">
            🧪 Analyze & Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default HealthForm;
