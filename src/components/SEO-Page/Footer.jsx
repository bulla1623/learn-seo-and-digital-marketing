import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4 className="heading">Our Timing</h4>
            <p>Monday - Saturday</p>
            <p>9:30 AM - 6:30 PM</p>
            <img className="logo" src="/Images/Tools/logo.png" alt="logo" />
          </div>
          <div className="col">
            <h4 className="heading">Our Courses</h4>
            <p>SEO Courses (90 days)</p>
            <p>Social Media Courses</p>
            <p>Digital Marketing Courses</p>
            <p>Graphic & Web Design Courses</p>
          </div>
          <div className="col">
            <h4 className="heading">Address</h4>
            <p>39B & 40B, 5th Floor, Motia'z Royal City, Zirakpur, Punjab 140603</p>
            <p>+91 96462 04610</p>
            <p>+91 76960 86560</p>
          </div>
          <div className="col">
            <h4 className="heading">Map</h4>
            <iframe
              className="map"
              src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Web Hitters&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
        <div className="row def">
            <div className="social-icons">
              <a href="https://www.instagram.com/learnseo_webdesign/" target="_blank" rel="noopener noreferrer">
                <img src="/Images/Social Media/instagram.png" alt="Instagram" className="icon" />
              </a>
              <a href="https://www.facebook.com/LearnSeoAndWebdesign/" target="_blank" rel="noopener noreferrer">
                <img src="/Images/Social Media/facebook.png" alt="Facebook" className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/web-hitters/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src="/Images/Social Media/linkedin.png" alt="LinkedIn" className="icon" />
              </a>
              <a href="https://x.com/learnseochd" target="_blank" rel="noopener noreferrer">
                <img src="/Images/Social Media/twitter.png" alt="X" className="icon" />
              </a>
            </div>
            <p>
              Copyright © 2025 Learn SEO & Web Designing Chandigarh | Design By <a href="https://www.web-hitters.com/">Web Hitters</a>
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
