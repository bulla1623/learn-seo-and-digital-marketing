import React from "react";
import myImage from "../../assests/SEO/Header images.jpg"; // Adjust the path as needed
import "./Training.css"

const MyComponent = () => {
  return (
    <div className="main-div-of-our-section">
      <div className="child-div-of-our-section">
        <div className="our-box-one-section">
          <h1 className="hero-section-second-h1">
            <span>SEO Training in Zirakpur</span>
          </h1>
          <p className="hero-section-second-p">
            Are you ready to enhance your online visibility and drive more traffic
            to your website? Our SEO Training in Zirakpur is perfect for you! This comprehensive program is
            tailored for individuals and businesses looking to master search engine optimization and leverage it
            for growth. Learn from industry experts as they guide you through the intricacies of SEO, including
            keyword research, on-page and off-page optimization, technical SEO, and data analytics.
            <br /><br />
            Our training is hands-on and practical, ensuring that you can apply what you’ve learned immediately.
            Whether you're a business owner, marketer, or aspiring SEO professional, our course will provide you
            with the tools and strategies needed to improve your website’s rankings and attract targeted
            visitors.
            <br /><br />
            Join us in Zirakpur and gain the skills to optimize your website effectively, boost your online
            presence, and stay ahead of the competition. Enroll now and take the first step towards mastering
            SEO and achieving digital success!
            <br /><br />
          </p>
        </div>
        <div className="img-container">
          <img src={myImage} alt="Best SEO Coaching in Dera Bassi" className="au"/>
          <button id="another-button" className="apply-now-btn btn-div">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
