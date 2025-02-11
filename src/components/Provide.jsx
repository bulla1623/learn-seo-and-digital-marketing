import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Provide.css";

const WhatWeProvide = () => {
  return (
    <div className="container mt-5">
      <div className="row p-0 d-flex flex-column flex-lg-row">
        <div className="col-lg-5 text-center">
          <div className="d-flex" style={{ gap: "10px" }}>
            <div className="m-auto image-container p-2">
              <img
                className="w-100 h-100 d-block"
                style={{ borderRadius: "10px" }}
                src="Images/What/Top-SEO-Training-in-Zirakpur.png"
                alt="Top SEO Training in Zirakpur"
              />
            </div>
            <div className="m-auto image-container p-2">
              <img
                className="w-100 h-100 d-block"
                style={{ borderRadius: "10px" }}
                src="Images/What/Top-SEO-Courses-in-zirakpur.png"
                alt="SEO Coaching in Zirakpur"
              />
            </div>
          </div>
          <div className="d-flex" style={{ gap: "10px" }}>
            <div className="m-auto image-container p-2">
              <img
                className="w-100 h-100 d-block"
                style={{ borderRadius: "10px" }}
                src="Images/What/SEO-Coaching-in-Zirakpur.png"
                alt="Top SEO Courses in Zirakpur"
              />
            </div>
            <div className="m-auto image-container p-2">
              <img
                className="w-100 h-100 d-block"
                style={{ borderRadius: "10px" }}
                src="Images/What/Learn-SEO-in-Zirakpur.png"
                alt="Learn SEO in Zirakpur"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 p-0 weg">
          <h3 className="p-2 p-md-0" style={{ fontSize: "30px" }}>
            <b>
              What <span class="abc"> Web Hitters </span> Is Offering?
            </b>
          </h3>
          <div className="row adc">
            <div className="col-md-6 p-2 p-md-0">
              {["100% Practical Training", "Regular Assignments", "Work With Professionals", "International Projects Only", "Flexible Timings", "Work On Live Projects Only"].map((item, index) => (
                <div key={index} className="d-flex align-items-center p-2" style={{ gap: "10px", marginTop: "10px" }}>
                  <svg style={{ height: "40px", width: "40px" }} viewBox="0 0 640 512">
                    <path d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2z" />
                  </svg>
                  <p style={{ fontSize: "14px" }}>{item}</p>
                </div>
              ))}
            </div>
            <div className="col-md-6 p-2">
              {["Weekend Batches", "Crisis Management", "Experienced Trainers", "Interview Preparation", "Certification", "Job Guaranteed in Digital Marketing"].map((item, index) => (
                <div key={index} className="d-flex align-items-center p-2" style={{ gap: "10px", marginTop: "10px" }}>
                  <svg style={{ height: "40px", width: "40px" }} viewBox="0 0 448 512">
                    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16L80 256z" />
                  </svg>
                  <p style={{ fontSize: "14px" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
