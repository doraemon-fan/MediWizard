import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/profile.css";

const ProfileCard = () => {
  const location = useLocation();

  // 🌟 Default Placeholder Data
  const [userInput, setUserInput] = useState({});
  const [prediction, setPrediction] = useState("Awaiting Analysis...");

  // 🎯 Update Data from Prediction and Inputs
  useEffect(() => {
    if (location.state) {
      const predictionString = location.state.prediction || "No prediction available";
      const inputData = location.state.formData || {};

      // 📝 Set Input and Prediction Data
      setUserInput(inputData);
      setPrediction(predictionString);
    }
  }, [location.state]);

  return (
    <div className="profile-container">
      <div className="profile-card holographic">
        <h2 className="profile-title">⚡️ Player Profile ⚡️</h2>

        {/* 🧙‍♂️ Display User Input */}
        <div className="input-summary">
          <h3>🩺 Vital Signs Submitted:</h3>
          <p>❤️ Heart Rate: {userInput.heartRate || "--"} BPM</p>
          <p>🌬️ Respiratory Rate: {userInput.respiratoryRate || "--"} RPM</p>
          <p>🌡️ Body Temperature: {userInput.bodyTemperature || "--"} °C</p>
          <p>🩸 Oxygen Saturation: {userInput.oxygenSaturation || "--"}%</p>
          <p>💓 Systolic BP: {userInput.systolicBP || "--"} mmHg</p>
          <p>💔 Diastolic BP: {userInput.diastolicBP || "--"} mmHg</p>
        </div>

        {/* 🎯 Prediction Results */}
        <h3 className="profile-title">⚔️ Prediction Analysis:</h3>
        <p className="profile-text prediction-string">
          🧙‍♀️ {prediction}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
