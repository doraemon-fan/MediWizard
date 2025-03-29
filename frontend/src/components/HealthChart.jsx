import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/healthChart.css";

const HealthChart = ({ records }) => {
  // 📊 Format Data for Chart
  const formattedData = records
    .slice()
    .reverse()
    .map((record) => ({
      date: new Date(record.createdAt).toLocaleDateString(),
      heartRate: record.heartRate,
      oxygenSaturation: record.oxygenSaturation,
      systolicBP: record.systolicBP,
    }));

  return (
    <div className="chart-container">
      <h2 className="section-title">📈 Vital Sign Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="heartRate" stroke="#f87171" name="Heart Rate" />
          <Line type="monotone" dataKey="oxygenSaturation" stroke="#60a5fa" name="Oxygen (%)" />
          <Line type="monotone" dataKey="systolicBP" stroke="#34d399" name="Systolic BP" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthChart;
