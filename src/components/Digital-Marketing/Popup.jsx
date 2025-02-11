import React, { useState } from "react";
import "./Popup.css"; // Import CSS for styling

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      onClose(); // Close when clicking outside the popup content
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="popup-left">
          <div className="form">
            <div className="title">Contact Us</div>
            <div className="input-group">
              <input className="input-field" type="text" required />
              <label className="input-label">Name</label>
            </div>
            <div className="input-group">
              <input className="input-field" type="email" required />
              <label className="input-label">Email</label>
            </div>
            <div className="input-group">
              <input className="input-field" type="text" required />
              <label className="input-label">Message</label>
            </div>
            <div className="input-group">
              <input className="input-field" type="tel" required />
              <label className="input-label">Your Number</label>
            </div>
            <button className="submit-button">Submit</button>
          </div>
        </div>
        <div className="popup-right">
          <img src="/Images/" alt="Popup" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
