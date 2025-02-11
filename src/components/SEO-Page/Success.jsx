import React from "react";
import video1 from "../../assests/SEO/vdo1.mp4"; 
import video2 from "../../assests/SEO/vdo2.mp4";
import video3 from "../../assests/SEO/vdo3.mp4";
import "./Success.css"

const SuccessStories = () => {
  return (
    <div className="main-section-of-vdo-story">
      <div className="section-of-vdo-story">
        <h1>Success Stories of our SEO Training Students</h1>
        <div className="video-div">
          <video autoPlay controls loop muted>
            <source src={video1} type="video/mp4" />
          </video>
          <video autoPlay controls loop muted>
            <source src={video2} type="video/mp4" />
          </video>
          <video autoPlay controls loop muted>
            <source src={video3} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
