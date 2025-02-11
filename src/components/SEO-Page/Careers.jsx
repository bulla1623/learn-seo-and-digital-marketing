import React from "react";
import "./Careers.css"
const CareerAfterSEO = () => {
  return (
  <div>
    <div className="main-our-career-div">
      <div className="our-career-div">
        <h1>
          <span>Career After Search Engine Optimization (SEO) Course</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing L.
        </p>
      </div>
      </div>
      <div className="main-our-career-main-div">
        {careerData.map((career, index) => (
          <div className="our-career-main-div" key={index}>
            <img src={career.image} alt={career.alt} />
            <div className="our-career-h2-p-div">
              <h2>{career.title}</h2>
              <p>{career.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const careerData = [
  {
    image: "/Images/Numbers/01 img.png",
    alt: "SEO Training in Dera Bassi",
    title: "Digital Marketing Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/Images/Numbers/02 img.png",
    alt: "SEO Courses in Dera Bassi",
    title: "Social Media Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/Images/Numbers/03 img.png",
    alt: "Top Digital Marketing Institute in Ambala",
    title: "SEO Specialist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/Images/Numbers/04 img.png",
    alt: "Top Digital Marketing Training in Ambala",
    title: "Email Marketing Specialist",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    image: "/Images/Numbers/05 img.png",
    alt: "Top Digital Marketing Courses in Ambala",
    title: "Marketing Director",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default CareerAfterSEO;
