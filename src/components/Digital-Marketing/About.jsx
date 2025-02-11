import React from "react";
import "./About.css"

const AboutDigitalMarketing = () => {
  return (
    <div className="main-div-of-about-digital-marketing">
      <div className="both-div-of-text-section">
        <div className="div-of-about-digital-marketing">
          <h1>About Digital Marketing Industry in India</h1>
          <p>
            The digital marketing industry in India has been growing rapidly over the past decade, driven by
            increasing internet penetration, a rise in smartphone usage, and a burgeoning e-commerce sector.
            Here are some key aspects of the industry:
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quia nostrum aspernatur, excepturi
            commodi ad, voluptate eius, vitae optio repellendus ratione maiores accusantium voluptatum aperiam
            itaque numquam laudantium mollitia dignissimos! aperiam itaque numquam
          </p>
        </div>
        <div className="text-line-of-about-us-marketing">
          {[
            {
              title: "E-commerce Boom",
              description:
                "The growth of e-commerce giants like Amazon, Flipkart, and newer entrants has driven a surge in digital marketing, including SEO, SEM, and content marketing tailored for online retail."
            },
            {
              title: "Social Media Influence",
              description:
                "Social media platforms like Facebook, Instagram, Twitter, and LinkedIn are heavily utilized for marketing purposes. The rise of platforms like TikTok and its Indian alternative, Moj, has also influenced digital marketing strategies."
            },
            {
              title: "Digital Ad Spend",
              description:
                "Digital advertising spend in India has been on the rise, surpassing traditional media channels like print and TV in terms of growth rate. Key areas include social media advertising, search engine marketing (SEM), and display advertising."
            },
            {
              title: "Mobile Marketing",
              description:
                "With high mobile internet usage, mobile marketing, including SMS, app-based marketing, and mobile ads, has become a crucial part of digital strategies."
            },
            {
              title: "Growth and Market Size",
              description:
                "India is one of the fastest-growing digital markets globally. As of 2024, the digital marketing industry in India is valued at several billion dollars, with projections indicating continued robust growth."
            }
          ].map((item, index) => (
            <div className="icon-and-text-div-of-marketing" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "25px", width: "20px", fill: "white" }} viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p>
                <b>{item.title}: </b>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDigitalMarketing;
