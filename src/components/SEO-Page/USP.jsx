import React from "react";
import myImg from "../../assests/SEO/Why Choose Us.png"
import "./usp.css"

const WhyChooseUs = () => {
  const points = [
    "Working Professionals",
    "Experienced Trainers",
    "Practical Learning Approach",
    "Job Assistance",
    "Flexible Timings",
    "Affordable Fees",
    "Industry-Relevant Curriculum",
    "Live Project Training",
  ];

  return (
    <div className="main-our-div-of-img-text">
      <div className="our-main-img">
        <div className="our-main-images">
          <img src={myImg} alt="SEO Institute in Dera Bassi" />
        </div>
        <div className="text-of-main-img">
          <h2>Why Choose Us</h2>
          <div className="all-point-of-why-choose-us">
            {points.map((point, index) => (
              <div key={index} className="our-icon-or-text-div">
                <img
                  src="/Images/ticks.jpg"
                  alt="Checkmark Icon"
                  style={{ height: "25px", width: "30px" }}
                />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
