import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Particles from "react-tsparticles";
import particlesConfig from "../utils/ParticlesConfig";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".fade-in");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // To handle initial loading state.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      {/* 🌟 Hero Section */}
      <section className="hero fade-in">
      <div className="particles-container">
    <Particles className="particles" params={particlesConfig} />
  </div>
        <h1 className="hero-title">⚡️ Welcome to MediWizard 🧙‍♂️</h1>
        <p className="hero-subtitle">
          Bringing Magic & AI Together for Your Health
        </p>
        <Link to="/start" className="btn btn-cta glow-hover">
          Begin Your Magical Journey 🌟
        </Link>
      </section>

      <section className="knowledge-hub fade-in">
        <h2 className="section-title">📚 The Wizard's Knowledge Hub</h2>
        <div className="spellbook-container">
          <div className="spellbook spell1">
            <h3>🪄 Tip #1: Stay Hydrated!</h3>
            <p>Drink plenty of water to maintain healthy skin and organs.</p>
          </div>
          <div className="spellbook spell2">
            <h3>✨ Tip #2: Get Enough Sleep</h3>
            <p>A well-rested mind ensures better immunity and focus.</p>
          </div>
          <div className="spellbook spell3">
            <h3>⚡️ Tip #3: Maintain a Balanced Diet</h3>
            <p>Include fruits, vegetables, and proteins in your daily meals.</p>
          </div>
          <div className="spellbook spell4">
            <h3>💡 Tip #4: Exercise Regularly</h3>
            <p>Physical activity boosts mental health and stamina.</p>
          </div>
        </div>
      </section>

      {/* 🌟 Features Section */}
      <section className="features fade-in">
        <h2 className="section-title">🏆 Key Features</h2>
        <div className="features-grid">
          <div className="feature-card gryffindor">
            <h3>🦁 Gryffindor – Vital Sign Prediction</h3>
            <p>Bravery meets AI! Predicts potential health risks.</p>
          </div>
          <div className="feature-card ravenclaw">
            <h3>🦅 Ravenclaw – Skin Analysis with Magic Mirror</h3>
            <p>Smart vision detects skin conditions through photos.</p>
          </div>
          <div className="feature-card slytherin">
            <h3>🐍 Slytherin – Dynamic Treatment Potions</h3>
            <p>Cunningly tailored treatments for ongoing health.</p>
          </div>
          <div className="feature-card hufflepuff">
            <h3>🦡 Hufflepuff – Spell-Casting Health Alerts</h3>
            <p>Stay safe with alerts that respond like spells.</p>
          </div>
        </div>
      </section>

      {/* 🌟 How It Works */}
      <section className="how-it-works fade-in">
        <h2 className="section-title">🔮 How It Works</h2>
        <div className="steps">
          <p>📝 Input Your Health Stats</p>
          <p>📸 Upload Skin Images</p>
          <p>⚡️ Get Instant Analysis & Potions</p>
          <p>🏥 Receive Dynamic Health Plans</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
