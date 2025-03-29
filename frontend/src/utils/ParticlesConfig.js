// src/utils/ParticlesConfig.js
const particlesConfig = {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle", // Circle, star, or other shapes
        stroke: {
          width: 0,
          color: "#facc15",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };
  
  export default particlesConfig;
  