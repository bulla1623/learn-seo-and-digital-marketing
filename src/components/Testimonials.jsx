import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "I started with zero and today I designed my own website..The working environment was so good it helped me learn many things. Thank you so much, sir... it was such a great experience...",
    img: "Images/reviews/Nikhil Raizada.png",
    name: "Nikhil Raizada",
    rating: "5/5"
  },
  {
    text: "I did Advanced SEO Training from him 1.5 Years Back and I am glad that I have been working in a leading IT Company in Mohali ever since.",
    img: "Images/reviews/Top Web Designing Courses in Zirakpur.png",
    name: "Bhawna Dhiman",
    rating: "5/5"
  },
  {
    text: "If you are looking for the best SEO course in Zirakpur, contact them. They are the best as they provide jobs as well as 100% practical knowledge as well.",
    img: "Images/reviews/Digital Marketing Training in Zirakpur City.png",
    name: "Navhjot Saini",
    rating: "5/5"
  },
  {
    text: "I did training from Sandeep 2 years back and now I am working in a reputed organisation in Chandigarh. I highly recommend Sandeep for your SEO and Internet Marketing Training. He provides JOBS in his company to good and outstanding candidates as well.",
    img: "Images/reviews/SEO Techniques Training Zirakpur.png",
    name: "Ritu Malaniya",
    rating: "5/5"
  },
  {
    text: "I did Training from Sandeep Bhandari. He trained me from Scrap to the Advanced level. His level of communication and Knowledge is far better from other SEO Training Providers that I tested.",
    img: "mages/reviews/neenu sekhon review.png",
    name: "Neenu sekhon",
    rating: "5/5"
  },
  {
    text: "I successfully completed my Digital Marketing and Web Design Course from them and now working in their company.",
    img: "Images/reviews/Hema rebiew image.png",
    name: "Hema Kundu",
    rating: "5/5"
  },
  {
    text: "I did business development course from webhitter training module was very good,now I am successfully doing freelancing",
    img: "Images/reviews/Rashmi review image.png",
    name: "Rashmi Kumar",
    rating: "5/5"
  },
  {
    text: "I did SEO training from them, everything was great and now i am working with them",
    img: "Images/reviews/Pamkaj review images.png",
    name: "Pankaj Sharma",
    rating: "5/5"
  },
  {
    text: "Great learning. Highly recommended!",
    img: "Images/reviews/Anamika review images.png",
    name: "Anamika Chhabra",
    rating: "5/5"
  },
  {
    text: "I did SEO Training from Sandeep Sir. He gave me in-depth knowledge of all concepts of SEO, SMO, PPC, and Email Marketing. Now after training, I am happy to be working with him as an SEO Executive in his company Web Hitters. I highly recommend Web Hitters.",
    img: "Images/reviews/SEO Skills Development Zirakpur.png",
    name: "Tarun Rawat",
    rating: "5/5",
    id: "stopSlide"
  }
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 2000;
  let intervalId = useRef(null);

  useEffect(() => {
    const startAutoSlide = () => {
      intervalId.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, slideDuration);
    };

    startAutoSlide();
    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    if (testimonials[currentIndex].id === "stopSlide") {
      clearInterval(intervalId.current);
      setTimeout(() => {
        setCurrentIndex(0);
      }, slideDuration);
    }
  }, [currentIndex]);

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container container">
        <h2 className="text-center heading-size-small">
          <b>What <span style={{ color: "#de3335" }}>Our Students</span> Say</b>
        </h2>
        <div
          className="slider-main-container"
          ref={sliderRef}
          onMouseEnter={() => clearInterval(intervalId.current)}
          onMouseLeave={() => {
            if (testimonials[currentIndex].id !== "stopSlide") {
              intervalId.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
              }, slideDuration);
            }
          }}
        >
          <div className="slider-container d-flex" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
            {testimonials.map((testimonial, index) => (
              <figure key={index} className="snip1139">
                <blockquote>{testimonial.text}</blockquote>
                <img src={testimonial.img} alt={testimonial.name} />
                <div className="author">
                  <h5>{testimonial.name} <span>{testimonial.rating}</span></h5>
                </div>
              </figure>
            ))}
          </div>
        </div>
        <div className="text-center mt-3">
          <a href="https://www.google.com/search?hl=en-IN&gl=in&q=Learn+SEO+and+Web+Design" target="_blank" rel="noopener noreferrer">
            <button className="view-all-reviews">View All Reviews</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
