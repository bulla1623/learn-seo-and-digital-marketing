import React from "react";
import "./Video.css"

const SEOCourseOverview = () => {
  return (
    <div className="main-seo-course-overview">
      <div className="seo-course-overview">
        <div className="seo-overview-od-img-text-div">
          <div className="our-seo-overview-section">
            <video
              autoPlay
              controls
              loop
              muted
              src="./Images/SEO-Overview.mp4"
              alt="SEO Coaching in Dera Bassi"
            />
          </div>
          <div className="our-view-of-p-h1">
            <h1>
              <span>SEO Course Overview</span>
            </h1>
            <p>
              Our SEO Course provides a thorough introduction to search engine optimization, designed for both
              beginners and seasoned marketers. You’ll learn essential SEO techniques, including keyword research,
              on-page optimization, link building, and technical SEO. The course focuses on practical strategies
              to enhance website rankings, drive organic traffic, and improve user experience.
            </p>
            <p>
              Taught by industry experts, the program combines theoretical knowledge with hands-on exercises
              and real-world case studies. You'll gain experience in using SEO tools and analytics to monitor and
              refine your strategies effectively.
            </p>
            <p>
              Consequatur nobis autem nulla ratione voluptates vitae dicta nihil. Natus, consectetur odit
              veritatis repudiandae aut et? Lorem ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOCourseOverview;
