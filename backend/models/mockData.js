// Mock predictions for vitals and skin analysis

const generatePrediction = (data) => {
    const { heartRate, bloodPressure, oxygenLevel, respiratoryRate } = data;
    let riskLevel = "Normal";
  
    if (heartRate > 120 || bloodPressure > 140 || oxygenLevel < 90) {
      riskLevel = "High Risk";
    } else if (heartRate > 100 || bloodPressure > 130 || oxygenLevel < 95) {
      riskLevel = "Moderate Risk";
    }
  
    return {
      playerPerformance: {
        seekerSpeed: heartRate,
        bludgerImpacts: bloodPressure,
        oxygenFlow: oxygenLevel,
        chaserCongestion: respiratoryRate,
      },
      riskLevel,
      commentary: `Quidditch Analysis: ${riskLevel === "High Risk" ? "Seek immediate medical help!" : "Stay in the game, you're doing fine!"}`,
    };
  };
  
  const analyzeSkin = (fileName) => {
    const mockResults = ["Acne", "Rash", "Normal"];
    const result = mockResults[Math.floor(Math.random() * mockResults.length)];
  
    return {
      skinCondition: result,
      spellEffect: result === "Normal" ? "All clear! 🧙‍♂️" : "Use healing potions! 🪄",
    };
  };
  
  module.exports = { generatePrediction, analyzeSkin };
  