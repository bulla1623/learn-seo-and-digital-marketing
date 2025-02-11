import React, { useState } from "react";
import "./Banner.css"; // Import custom styles

const PopupModal = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);


  return (
    <div className="container">
      <div className="cta-section">
        <h3>Want A High-Paying Career in Digital Marketing?</h3>
        <button className="abcd"  onClick={openPopup}>
          Get Started!
        </button>
      </div>

      {/* Popup Modal */}
      {/* Popup Form */}
      <div className={`popup ${isPopupOpen ? 'show' : ''}`} onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={closePopup}>&times;</span>

          {/* Form Section */}
          <div className="row">
            <div className="col-md-6 text-center popup-left">
              <form className="form-container1" method="POST" action="https://script.google.com/macros/s/AKfycby5Q3XNTliQzDryPvYqv-04W0jDs_iVPsTPoapc3hQ9oNLH2rfzdc1wYpqDH2VwuUvaag/exec">
                <h3 className="text-align-center">
                  <b>Apply for<br /><span style={{ color: '#de3335', lineHeight: '1.5' }}>The Digital Marketing Course</span></b>
                </h3>
                <label htmlFor="Name">Name:</label>
                <input type="text" placeholder="Full Name" id="Name" name="Name" required />
                
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" placeholder="Phone Number" id="phone" name="Phone" required />
                
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="Email" id="Email" name="Email" required />
                
                <label htmlFor="batches">Choose a batch:</label>
                <select id="batches" name="Batch">
                  <option>February 15</option>
                  <option>March 1</option>
                </select>

                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Message" name="Message" rows="4"></textarea>

                <button type="submit" className="btn-read-more">Apply</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="Images/popup img.jpg" height="650px" width="450px" alt="Popup Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
