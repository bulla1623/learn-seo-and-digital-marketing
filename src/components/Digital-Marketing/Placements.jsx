import React, { useState } from "react";
import "./Placements.css"
import Popup from "./Popup";

const JobPlacements = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="main-div-of-job-placements">
      <div className="div-of-job-placements">
        <div className="heading-or-text-placement">
          <h1>
            <span>Top Digital Marketing Courses in Zirakpur with </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minima, animi earum accusamus eius
            quidem veniam impedit blanditiis, esse ipsum natus possimus facere vel. Natus commodi porro
            dignissimos eaque et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis placeat
            voluptates quis repellendus expedita libero nemo rem ut unde id, nulla reiciendis. Error dolorem,
            repellendus neque nisi explicabo sapiente magni.
            <br /><br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor voluptatibus, rem quae
            blanditiis inventore cupiditate excepturi! Exercitationem, quisquam cupiditate, accusantium hic
            dolorum maxime adipisci eos rerum veniam, perspiciatis non.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur facere distinctio
            provident modi maiores exercitationem blanditiis corporis pariatur! Voluptatem officiis voluptate
            inventore non quod saepe, fugiat dolor ut sint.
            provident modi maiores exercitationem blanditiis corporis pariatur! Voluptatem officiis voluptate
            inventore non quod saepe,
          </p>
        </div>
        <div className="image-div-of-placement">
          <img
            src="/Images/DM/Digital Marketing Courses in Zirakpur.jpg"
            alt="Digital Marketing Courses in Zirakpur"
          />
          <button className="enroll-btn-of-image-div" onClick={() => setIsPopupOpen(true)}>Enroll Now</button>
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default JobPlacements;
