import React from "react";
import certificateImg from "../../assests/SEO/certificate.png"; // Adjust path as needed
import "./Certificate.css"

const CertificationSection = () => {
  return (
    <div className="main-our-job-section">
      <div className="our-job-section">
        <div className="certificate-text-section">
          <h3>
            Industry <span>Recognized Certification</span> From{" "}
            <span>Web Hitters</span> Academy
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad fugit molestias excepturi quae non
            vero totam sint provident nemo assumenda, amet minus culpa laudantium magni asperiores alias
            voluptates atque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ad aspernatur necessitatibus vero
            doloremque excepturi aut incidunt, at, tempore aliquam nesciunt quaerat, hic ducimus est voluptates
            molestiae! Dolor, consequuntur eligendi!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sunt tenetur quasi quos quia dolorem ad
            molestias officiis doloremque nisi, perferendis consequatur esse tempora cumque hic maiores porro
            fugiat. Inventore!
          </p>
        </div>
        <div className="certificate-container">
          <img src={certificateImg} alt="SEO Courses in Ambala" />
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
