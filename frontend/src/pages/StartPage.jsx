import { Link } from "react-router-dom";
import "../styles/start.css";

const StartPage = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="title">⚡️ Enter the World of MediWizard 🧙‍♂️</h1>
        <p className="subtitle">Ready to uncover the secrets of your health?</p>
        <div className="buttons">
          <Link to="/health-form" className="btn btn-primary glow-hover">
            Analyze Your Health 🩺
          </Link>
          <Link to="/skin-upload" className="btn btn-secondary glow-hover">
            Explore the Magic Mirror 🪞
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
