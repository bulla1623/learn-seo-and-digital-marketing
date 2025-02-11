import React from "react";
import "./Future.css";

const FutureDigitalMarketing = () => {
  return (
    <section className="future-dm">
      <h2 className="future-title">
        The <span className="highlight">Future</span> of <span className="highlight">Digital Marketing</span>
      </h2>
      <p className="future-description">
        Unlock endless possibilities and take the next big step in your career.
      </p>

      <div className="row-blocks">
        {rowItems.map((item, index) => (
          <div key={index} className="row-item">
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const rowItems = [
  {
    img: "Images/future/soft skills.svg",
    alt: "Career Transition",
    title: "Career Transition",
    description: "Switch to a thriving career in digital marketing effortlessly."
  },
  {
    img: "Images/future/money bag.svg",
    alt: "High Salaries",
    title: "Highly Paid Salaries",
    description: "Enjoy competitive salaries and grow your financial future."
  },
  {
    img: "Images/future/interview.svg",
    alt: "Entrepreneurship",
    title: "Entrepreneurship Opportunities",
    description: "Build your dream business and become a market leader."
  },
  {
    img: "Images/future/icon_ee175b48db3c9371f63790edde3060aa0ade8af8.svg",
    alt: "Market Leadership",
    title: "Market Leadership",
    description: "Gain skills to dominate the market and stay ahead of trends."
  }
];

export default FutureDigitalMarketing;
