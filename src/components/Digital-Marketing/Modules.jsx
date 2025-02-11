import React, { useState } from "react";
import "./Modules.css"; // Import CSS file

const topics = [
  { 
    title: "Website Creation", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/1.jpg" 
  },
  { 
    title: "Pay Per Click (Google Ads)", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/2.jpg" 
  },
  { 
    title: "SEO (Search Engine Optimization)", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/3.jpg" 
  },
  { 
    title: "Local SEO", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/4.jpg" 
  },
  { 
    title: "Facebook Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/5.jpg" 
  },
  { 
    title: "Instagram Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/6.jpg" 
  },
  { 
    title: "LinkedIn Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/7.jpg" 
  },
  { 
    title: "Twitter Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/8.jpg" 
  },
  { 
    title: "YouTube Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/9.jpg" 
  },
  { 
    title: "Email Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/10.jpg" 
  },
  { 
    title: "Affiliate Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/11.jpg" 
  },
  { 
    title: "Google Analytics", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/12.jpg" 
  },
  { 
    title: "How to Build a Successful Blog", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/13.jpg" 
  },
  { 
    title: "Google AdSense", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/14.jpg" 
  },
  { 
    title: "Sales Funnels", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/15.jpg" 
  },
  { 
    title: "Content Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/16.jpg" 
  },
  { 
    title: "Marketing Automation", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/17.jpg" 
  },
  { 
    title: "Google Search Console", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/18.jpg" 
  },
  { 
    title: "Pinterest Marketing", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/19.jpg" 
  },
  { 
    title: "Tag Manager", 
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero nisi dolor maxime aperiam eos. Rem ad aliquam, iusto id praesentium molestiae suscipit voluptas voluptates vitae impedit eius magnam nesciunt.", 
    image: "/Images/DM/Modules/20.jpg" 
  },
];

export default function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
    <div className="main-box-of-models-heading-text">
      <div className="box-of-models-heading-text">
        <h1>
          What You’ll Learn in Our <span>Digital Marketing Course</span> and
          Training with Real-time Projects and Case Studies
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          vero accusantium saepe magni error, itaque deserunt. In nobis
          architecto vero. Placeat laborum esse quaerat omnis reprehenderit
          aspernatur nisi quas!
        </p>
      </div>
    </div>
    <br/>
    <div className="module-container">
      <div className="module-grid">
        {topics.map((item, index) => (
          <div key={index} className="module-item">
            <div className="module-header" onClick={() => toggleExpand(index)}>
              <span>{index + 1}. {item.title}</span>
              <button className="module-button">
                {expandedIndex === index ? "−" : "+"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="module-content">
                <p>{item.content}</p>
                <img src={item.image} alt={item.title} className="module-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
