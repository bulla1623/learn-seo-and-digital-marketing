import React from "react";
import "./Benefits.css"; 

const Benefits = () => {
  return (
    <div className="main-div-of-benefit-digital-marketing">
      <div className="div-of-benefit-digital-marketing">
        <div className="first-text-of-benefit-div">
          <h2>Benefits of Digital Marketing Course</h2>
          <hr />
          <p>
            Taking a digital marketing course offers several benefits, whether you're looking to enhance your
            career, start a new venture, or simply understand the field better. Here are some key
            advantages:
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia, consequuntur est
            accusamus quaerat at pariatur tempore error eligendi quidem sequi velit doloremque qui
            voluptates expedita magni quam sed dolorum?
          </p>
        </div>
        <div className="second-text-of-benefit-div">
          {benefits.map((benefit, index) => (
            <div className="icon-and-text-div-of-marketing" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "25px", width: "20px", fill: "white" }} viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p>
                <b>{benefit.title}: </b> {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Networking Opportunities",
    description: "Courses often provide access to a network of professionals, instructors, and peers. This networking can lead to valuable connections, collaborations, and career opportunities within the digital marketing field."
  },
  {
    title: "Comprehensive Skill Development",
    description: "Digital marketing courses cover a wide range of skills, including SEO, SEM, social media marketing, content marketing, email marketing, and data analytics. This comprehensive knowledge can make you a well-rounded marketer."
  },
  {
    title: "Up-to-Date Knowledge",
    description: "The digital marketing landscape is constantly evolving with new tools, trends, and algorithms. Courses often provide the latest information and best practices, helping you stay current in a rapidly changing industry."
  },
  {
    title: "Practical Experience",
    description: "Many courses include hands-on projects and real-world case studies, allowing you to apply theoretical knowledge in practical scenarios. This practical experience is valuable for building a portfolio and demonstrating your skills to potential employers or clients."
  },
  {
    title: "Career Advancement",
    description: "Digital marketing skills are in high demand across various industries. Completing a course can enhance your resume, making you more attractive to employers and potentially leading to promotions or new job opportunities."
  }
];

export default Benefits;
