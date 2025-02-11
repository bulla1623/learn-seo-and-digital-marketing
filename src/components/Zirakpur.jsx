import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Zirakpur.css";

const AboutZirakpur = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <img
            className="image"
            src="/Images/Advanced-SEO-Courses-Zirakpur.jpg"
            alt="Top Digital Marketing Courses in Zirakpur"
          />
        </div>
        <div className="text-container">
          <h3 className="heading">
            About <span className="highlight">Zirakpur</span>
          </h3>
          <p className="text">
            Zirakpur is a town located outside of Chandigarh. The Ambala Chandigarh highway passes by it. When
            you cross the Derabassi and enter Zirakpur while traveling from Delhi, you will see the Decathlon
            and McDonald’s stores.
            <br /><br />
            Moreover, the city is home to a large number of separate malls, and many more are planned to open
            shortly. Some of the movie brands that are available in Zirakpur are Inox, PVR, and Carnival.
            <br /><br />
            Thus, Zirakpur is a place that is liked by almost all people, regardless of age groups. Whether they are
            seniors, youth, or kids, Zirakpur is now the number one option for everyone.
          </p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          className="map"
          src="https://maps.google.com/maps?width=2048&amp;height=400&amp;hl=en&amp;q=web hitters&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google-map"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutZirakpur;