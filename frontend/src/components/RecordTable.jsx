import "../styles/recordTable.css";

const RecordTable = ({ records }) => {
  return (
    <div className="record-table-container">
      <h2 className="section-title">📄 Health Record History</h2>
      <table className="record-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>❤️ Heart Rate</th>
            <th>🌬️ Respiratory Rate</th>
            <th>🌡️ Temp (°C)</th>
            <th>🩸 Oxygen (%)</th>
            <th>💓 Systolic BP</th>
            <th>💔 Diastolic BP</th>
            <th>🔍 Prediction</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                <td>{new Date(record.createdAt).toLocaleString()}</td>
                <td>{record.heartRate} BPM</td>
                <td>{record.respiratoryRate} RPM</td>
                <td>{record.bodyTemperature} °C</td>
                <td>{record.oxygenSaturation}%</td>
                <td>{record.systolicBP} mmHg</td>
                <td>{record.diastolicBP} mmHg</td>
                <td>{record.prediction}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">⚠️ No records found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
