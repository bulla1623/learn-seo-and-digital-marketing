import React from "react";
import "./Benefits.css"

const SEOBenefits = () => {
  return (
    <div className="main-div-benefit-of-seo">
      <div className="benefit-of-seo">
        <div className="box1-of-benefit-of-seo">
          <h1>What Is SEO and its Benefits?</h1>
          <hr/>
          <p>
            SEO, or Search Engine Optimization, is a digital marketing strategy focused on improving a website's
            visibility in search engine results pages (SERPs). The goal is to increase the quantity and quality
            of organic (non-paid) traffic to a website. SEO involves optimizing various aspects of a website,
            such as its content, structure, and technical elements, to make it more attractive to search engines like Google.
          </p>
        </div>
        <div className="ans-of-benefit-of-seo">
          {[
            { title: "Increased Organic Traffic", description: "Effective SEO improves a website's ranking in search engine results, leading to more visitors without paying for ads." },
            { title: "Cost-Effectiveness", description: "Compared to paid advertising, maintaining a good ranking typically costs less than ongoing ad spend." },
            { title: "Better Conversion Rates", description: "Targeted traffic from SEO is more likely to convert into leads or sales because it aligns with users' specific search intent." },
            { title: "High Brand Visibility", description: "High search rankings improve brand visibility, leading to greater recognition as users become more familiar with your name." },
          ].map((benefit, index) => (
            <div className="icon-and-text-benefit-div" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "25px", width: "30px", fill: "white" }} viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p>
                <b>{benefit.title}:</b> {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOBenefits;
