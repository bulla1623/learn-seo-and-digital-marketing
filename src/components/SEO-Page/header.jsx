import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div class="navbar-logo">
    <div class="container">
        <div class="row align-items-center">
            
            <div class="col-md-4 d-flex align-items-center">
                <img src="Images/we hitters.png" alt="Logo" class="logo"/>
            </div>

            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <span class="contact-info">
                    <span class="glyphicon glyphicon-earphone"></span>
                    <a href="tel:9646204610">+91 96462-04610</a>&nbsp;&nbsp;
                    <span class="glyphicon glyphicon-earphone"></span>
                    <a href="tel:7696086560">+91 76960-86560</a>
                </span>
            </div>

            
            <div class="col-md-4 d-flex justify-content-end align-items-center">
                <div class="social-icons">
                    <a href="https://www.instagram.com/learnseo_webdesign/" target="_blank">
                        <img src="Images/Social Media/instagram.png" alt="Instagram" class="social-icon"/>
                    </a>
                    <a href="https://www.facebook.com/LearnSeoAndWebdesign/" target="_blank">
                        <img src="Images/Social Media/facebook.png" alt="Facebook" class="social-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/company/web-hitters/posts/?feedView=all" target="_blank">
                        <img src="Images/Social Media/linkedin.png" alt="LinkedIn" class="social-icon"/>
                    </a>
                    <a href="https://x.com/learnseochd" target="_blank">
                        <img src="Images/Social Media/twitter.png" alt="Twitter" class="social-icon"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};
    
export default Header;
