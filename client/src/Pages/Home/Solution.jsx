import React from "react";
import solution from "../../data/solution.json";
import benefits from "../../data/benefits.json"

const Solutions =() => {
  return(
    <div id="Solution" className="solution-wrapper">
      <h1 className="solution-title">Our Solution</h1>
      <p className="solution-subtitle">How we solve real sales challenges with AI</p>

      <div className="solution-grid">
        {solution.map((item, index) => (
          <div key={index} className="solution-card">
            <div className="solution-problem">
              <strong class="tit_strong">Problem</strong> {item.problem}
            </div>
            <div className="solution-answer">
              <strong class="tit_strong">Solution</strong> {item.solution}
            </div>
          </div>
        ))}
      </div>

      <div className="benefits-grid">
        {benefits.map((item,index)=>(
          <div key={index} className="benefits-card">
            <div className="benefits-icon">
            <img src={item.icon} alt={item.text} className="benefits-icon" />
            </div>
            <div className="benefits-text">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;