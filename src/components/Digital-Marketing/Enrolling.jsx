import React, { useState } from "react";
import "./Enrolling.css";

const Enrolling = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonContent = [
    "This is the text for Button 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aspernatur omnis autem cum odit, a temporibus itaque nulla, maxime consequuntur adipisci tenetur, labore repudiandae! Autem nihil quo enim nesciunt pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatem et enim laudantium nam suscipit impedit nihil sed esse ex? Et vero repellendus facere ipsum libero deleniti pariatur fugit temporibus. temporibus itaque nulla, maxime consequuntur adipisci tenetur, labore repudiandae! Autem nihil quo enim nesciunt pariatur?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, voluptatem et enim laudantium nam suscipit impedit nihil sed esse ex? Et vero repellendus facere ipsum libero deleniti pariatur fugit temporibus.",
    "This is the text for Button 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic, deserunt ratione ullam ad obcaecati explicabo fugiat maiores excepturi vero, illum incidunt! Laudantium, quasi sapiente. Quo expedita dolores laborum suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, architecto esse ab incidunt deleniti enim magnam assumenda necessitatibus voluptate. Repellendus libero, nobis et eligendi eos voluptates laborum suscipit placeat assumenda.",
    "This is the text for Button 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, rem corrupti! Quidem nemo facilis illo error ipsum, consectetur, perferendis velit ut eaque voluptas consequuntur blanditiis. Dolorem expedita in delectus temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi dolorum quo inventore facilis quis nisi fugiat, a minima et tempora voluptatibus sapiente culpa, rem architecto magnam obcaecati voluptatem. Voluptatibus.",
  ];

  return (
    <div>
      {/* Section 1: Digital Marketing Buttons */}
      <div className="main-three-btn">
        <div className="main-class-importance-of-digital-marketing">
          <h1>
            The Value of Enrolling in a <span>Digital Marketing Course in Zirakpur</span>
          </h1>
        </div>
        <div className="c1-container">
          <div className="b1-buttons">
            {["Importance of Digital Marketing", "Building Comprehensive Marketing Skills", "Boosting Creativity and Innovation"].map((text, index) => (
              <button
                key={index}
                className={`b1-button ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {text}
              </button>
            ))}
          </div>
          <div className="t1-text-content">
            {buttonContent.map((text, index) => (
              <p key={index} className={`t1-text-item ${activeIndex === index ? "show blue-background" : ""}`}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolling;
