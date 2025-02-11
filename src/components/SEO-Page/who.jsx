import React from "react";
import studentImg from "../../assests/SEO/Student img.png";
import businessImg from "../../assests/SEO/Business Owners.png";
import professionalImg from "../../assests/SEO/Professional.png";
import housewivesImg from "../../assests/SEO/Housewives.png";
import "./Who.css";

const OurAdvancedSEOCourses = () => {
  return (
    <div className="our-main-outerline-box-of-heading">
      <div className="outerline-box-of-heading">
        <h1>
          <span class="abc">Who Can Join Our Advanced SEO Courses in Zirakpur</span>
        </h1>
        <p>
          Our Advanced SEO Courses in Zirakpur are ideal for a diverse range of individuals. Freshers eager to
          enter the digital marketing field, housewives looking to enhance their skills and explore new career
          opportunities, business owners wanting to boost their online presence, and professionals seeking to
          upgrade their expertise will all benefit. Whether you’re starting from scratch or aiming to deepen
          your knowledge, our course offers practical insights and advanced techniques to help you succeed in
          SEO.
        </p>
      </div>
      <div className="our-outerline-box-of-heading">
        <div className="for-tab-viwe-our-section">
          {[
            { img: studentImg, alt: "Best SEO Training in Dera Bassi", label: "Freshers and Job Seekers" },
            { img: businessImg, alt: "Best SEO Courses in Dera Bassi", label: "Business Owners" },
          ].map((item, index) => (
            <div className="our-pic-and-icon" key={index}>
              <div className="image-container newcontainer">
                <img src={item.img} alt={item.alt} />
                <div className="overlay">
                  <button className="overlay-button">Enroll Now</button>
                </div>
              </div>
              <p>
                <b>{item.label}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="for-tab-viwe-our-section">
          {[
            { img: professionalImg, alt: "Digital Marketing Training in Dera Bassi", label: "Professional" },
            { img: housewivesImg, alt: "Digital Marketing Courses in Dera Bassi", label: "Housewives" },
          ].map((item, index) => (
            <div className="our-pic-and-icon" key={index}>
              <div className="image-container newcontainer">
                <img src={item.img} alt={item.alt} />
                <div className="overlay">
                  <button className="overlay-button">Enroll Now</button>
                </div>
              </div>
              <p>
                <b>{item.label}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAdvancedSEOCourses;
