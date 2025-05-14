import features from "../../data/features.json";
import React from "react";
import "../../App.css"

const Features = () => {
  return(
    <div id="Features" className="features-container">
    <h1 className="features-title">Key Features</h1>
    <p className="features-subtitle">Discover how our AI Assistant transforms sales teams.</p>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
          <img src={feature.image} alt={feature.title} className="feature-image" />
        </div>
      ))}
    </div>
    <div className="visual--flowchart">
      <h2>Upload Data → Analyze → Forecast → Ask AI (Chatbot)</h2>
    </div>
  </div>
  );
}

export default Features;