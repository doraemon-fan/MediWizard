import { useEffect, useState } from "react";
import RecordTable from "../components/RecordTable";
import HealthChart from "../components/HealthChart";
import { getAllRecords } from "../api/healthApi";
import "../styles/healthDashboard.css";

const HealthDashboard = () => {
  const [records, setRecords] = useState([]);

  // 📡 Fetch Records on Page Load
  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getAllRecords(); // ✅ Fetch records from API
      setRecords(data);
    };
    fetchRecords();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📊 Health Dashboard</h1>

      {/* 📄 Health Records Table */}
      <RecordTable records={records} />

      {/* 📈 Health Data Chart */}
      <HealthChart records={records} />
    </div>
  );
};

export default HealthDashboard;
