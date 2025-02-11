import React from "react";
import "./Accredited.css"; // Import an external CSS file for styling

const Accredited = () => {
  return (
    <div className="accredited-section" id="accredited">
      <h2>
        
          We are <span className="highlight">Accredited</span> by
        
      </h2>
      <br />
      <div className="tools-list">
        <div className="tool-item">
          <img src="Images/msme.png" alt="MSME" />
        </div>
        <div className="tool-item">
          <img src="Images/nasscom.png" alt="Nasscom" />
        </div>
      </div>
    </div>
  );
};

export default Accredited;
