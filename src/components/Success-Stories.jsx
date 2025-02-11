import React from "react";
import "./Success-Stories.css"; // Ensure this CSS file is correctly imported

const successStories = [
  { img: "/Images/placed/1.jpg", name: "Prince Saini" },
  { img: "/Images/placed/2.jpg", name: "Nidhi" },
  { img: "/Images/placed/3.jpg", name: "Saurav Singh" },
  { img: "/Images/placed/4.jpg", name: "Ainjla" },
  { img: "/Images/placed/5.jpg", name: "Diksha" },
  { img: "/Images/placed/6.jpg", name: "Abhishek Gupta" },
  { img: "/Images/placed/8.png", name: "Yatin" },
  { img: "/Images/placed/9.png", name: "Sagar" },
  { img: "/Images/placed/10.png", name: "Moksh" },
  { img: "/Images/placed/7.png", name: "Hasan" },
  { img: "/Images/placed/11.png", name: "Prisha" },
  { img: "/Images/placed/12.png", name: "Sahil" },
];

const SuccessStories = () => {
  return (
    <section className="success-stories" id="success">
      <div className="container">
        <h2>
          <b>
            Our <span style={{ color: "#de3335" }}>Success Stories</span>
          </b>
        </h2>
        <p>
          Students who achieved remarkable career transitions through our program
        </p>
        
        {/* Grid Container */}
        <div className="carousel">
          <div className="row ef">
            {successStories.map((story, index) => (
              <div key={index} className="profile-card">
                <img src={story.img} alt={story.name} />
                <p><b>{story.name}</b></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
