import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StartPage from "./pages/StartPage";
import HealthForm from "./pages/HealthForm";
import MagicMirror from "./pages/MagicMirror";
import ProfileCard from "./pages/ProfileCard";
import HealthDashboard from "./pages/HealthDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/dashboard" element={<HealthDashboard />} />
        <Route path="/health-form" element={<HealthForm />} />
        <Route path="/magic-mirror" element={<MagicMirror />} />
        <Route path="/profile-card" element={<ProfileCard />} />
      </Routes>
    </Router>
  );
}

export default App;
