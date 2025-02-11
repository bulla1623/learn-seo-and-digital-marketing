import React from "react";
import "./hero-section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Helmet} from "react-helmet";


const HeroSection = () => {
  return (
    <div className="vdc">
      <div className="row">
        <div className="col-7">
          <section className="hero-section text-center">
            <div className="container">
              <div className="header">
                <h2 className="abc">
                  Become a <span style={{ color: "#de3335" }}>Digital Marketer</span> in 12 weeks
                </h2>
                <b style={{ fontSize: "24px" }}>
                  100% Job <i style={{ color: "#de3335" }}>Guarantee</i> in Digital Marketing
                </b>
              </div>
            </div>
            <br />
            <br />
            <img src="./Images/review2.png" alt="webhitters" />
          </section>
          <div className="container">
            <div className="container position-relative mt-5 mt-md-0 remove-postion-of-number-section" style={{ top: "-28px" }}>
              <div className="main-number-section-of-hero row justify-content-center mt-lg-0 mt-sm-5">
                <div className="number-section-of-hero col-11 col-md-11 col-lg-10 col-xl-8 p-4">
                  <div className="numberdiv d-flex flex-wrap justify-content-around">
                    <div className="no1 text-center mb-3 mb-md-0">
                      <div className="for-plus d-flex align-items-center justify-content-center">
                        <h3 className="m-0 text-bold" style={{ fontSize: "18px" }}>500</h3>
                        <p className="mb-0">+</p>
                      </div>
                      <p style={{ fontSize: "14px" }}>Candidates Trained</p>
                    </div>

                    <div className="no3 text-center mb-3 mb-md-0">
                      <div className="for-plus d-flex align-items-center justify-content-center">
                        <h3 className="m-0" style={{ fontSize: "18px" }}>100</h3>
                        <p className="mb-0">%</p>
                      </div>
                      <p style={{ fontSize: "14px" }}>Live Projects</p>
                    </div>

                    <div className="no4 text-center mb-3 mb-md-0">
                      <div className="for-plus d-flex align-items-center justify-content-center">
                        <h3 className="m-0" style={{ fontSize: "18px" }}>75</h3>
                        <p className="mb-0">+</p>
                      </div>
                      <p style={{ fontSize: "14px" }}>Professionals</p>
                    </div>

                    <div className="no2 text-center">
                      <div className="for-plus d-flex align-items-center justify-content-center">
                        <h3 className="m-0 text-of-2008" style={{ fontSize: "18px" }}>2008</h3>
                      </div>
                      <p className="since-text" style={{ fontSize: "14px" }}>Since</p>
                    </div>
                    <Helmet>
                      <script src=""></script>
                    </Helmet>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="button-container">
                <button className="btn-apply">
                  <b>Apply Now</b>
                </button>
                <a href="SEO and Digital Marketing Training Modules.pdf" download className="btn-download">
                  <b>Download Brochure</b>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-5">
          <form className="form-container" method="POST" action="https://script.google.com/macros/s/AKfycby5Q3XNTliQzDryPvYqv-04W0jDs_iVPsTPoapc3hQ9oNLH2rfzdc1wYpqDH2VwuUvaag/exec">
            <h5>
              <b>
                Apply For <br />
                <span style={{ color: "#de3335", lineHeight: "1.5" }}>The Digital Marketing Training Course</span>
              </b>
            </h5>
            <br />
            <label htmlFor="Name">Name:</label>
            <input type="text" placeholder="Full Name" id="Name" name="Name" />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" placeholder="Phone Number" id="phone" name="Phone" />

            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" id="Email" name="Email" />

            <label htmlFor="batches">Choose a batch</label>
            <select id="batches" name="Batch">
              <option label="February 15">February 15</option>
              <option label="March 1">March 1</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message" name="Message" rows="3"></textarea>

            <button type="submit" className="btn-read-more">Apply</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
