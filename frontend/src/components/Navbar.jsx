import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Handle active link
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🧙‍♂️ <span>MediWizard</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "❌" : "🍂"}
        </div>

        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li className={`nav-item ${isActive("/")}`}>
            <Link to="/" className="nav-link">
              🏠 Home
            </Link>
          </li>
          <li className={`nav-item ${isActive("/dashboard")}`}>
            <Link to="/dashboard" className="nav-link">
              🌟 Dashboard
            </Link>
          </li>
          <li className={`nav-item ${isActive("/health-form")}`}>
            <Link to="/health-form" className="nav-link">
              🧙‍♂️ Health Form
            </Link>
          </li>
          <li className={`nav-item ${isActive("/skin-upload")}`}>
            <Link to="/magic-mirror" className="nav-link">
              🪞 Magic Mirror
            </Link>
          </li>
          <li className={`nav-item ${isActive("/profile-card")}`}>
            <Link to="/profile-card" className="nav-link">
              🎴 Profile Card
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
