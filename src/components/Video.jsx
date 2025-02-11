import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Video.css";

const Video = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Text Section */}
        <div className="col-lg-6">
          <h2 className="p-4 text-center" style={{ fontFamily: "Georgia, serif" }}>
            <b>
              <span style={{ color: "#de3335", fontSize: "34px" }}>100%</span> Success Rate
            </b>
          </h2>
          <p className="p-2" style={{ fontSize: "16px", textAlign: "justify" }}>
            With a 100% success rate, our students secure promising career opportunities. They benefit from
            an average package offer that reflects their improved skills and certifications in our <b>top
              digital marketing courses in Chandigarh,</b> including SEO, graphic designing,
            and web designing. Our detailed training programs ensure students are well-prepared for the
            competitive job market and have hands-on experience.
            <br /><br />
            We also provide specific career support, including job placement help and networking opportunities
            with leading companies. This commitment to high standards has established us as a top option for
            individuals looking to advance their careers or start new businesses in the dynamic field of the
            digital and creative sectors. Whether you’re aiming to launch a successful profession or improve
            your skills, our courses provide the foundation for your growth and success.
          </p>
        </div>

        {/* Video Section */}
        <div className="col-lg-6">
          <div className="video-container">
            <div className="video-grid">
              <div className="video-row">
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge13.mp4"></video>
                </div>
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge12.mp4"></video>
                </div>
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge15.mp4"></video>
                </div>
              </div>
              <div className="video-row">
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge16.mp4"></video>
                </div>
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge17.mp4"></video>
                </div>
                <div className="grid-item">
                  <video autoPlay loop muted className="side-video" src="Images/Videos/new-vdo-of-colloge14.mp4"></video>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Video;
