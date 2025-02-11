import React, { useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Rating.css"; // Your custom styles

const RatingsAndReviews = () => {
  const sliderRef = useRef(null);

  const slides = [
    { src: './Images/Hiring-Partners/AKS-Developers.png', alt: 'AKS Developers' },
    { src: './Images/Hiring-Partners/Architects-Group.png', alt: 'An Architects Group' },
    { src: './Images/Hiring-Partners/Art.png', alt: 'Art' },
    { src: './Images/Hiring-Partners/Arvind-Herbal-Labs.png', alt: 'Arvind-Herbal-Labs' },
    { src: './Images/Hiring-Partners/Barphani.png', alt: 'Barphani' },
    { src: './Images/Hiring-Partners/BEST-IELTS-COACHING-INSTITUTE-IN-CHANDIGARH.png', alt: 'Test-Ilets' },
    { src: './Images/Hiring-Partners/Book-My-Air-Travel.png', alt: 'Book-My-Air-Travel' },
    { src: './Images/Hiring-Partners/Move ONN.png', alt: 'Move-ONN' },
    { src: './Images/Hiring-Partners/Women-Care-Clinic.png', alt: 'Women-Care-Clinic' },
    { src: './Images/Hiring-Partners/Adore-me-boutique.png', alt: 'Adore-me-boutique' },
    { src: './Images/Hiring-Partners/Browse-Wheels.png', alt: 'Browse-Wheels'},
    { src: './Images/Hiring-Partners/California.png', alt:'California'},
    { src: './Images/Hiring-Partners/CPS.png', alt:'CPS'},
    { src: './Images/Hiring-Partners/CREx-Property.png', alt:'CREx-Property'},
    { src: './Images/Hiring-Partners/CSM.png', alt: 'CSM'},
    { src: './Images/Hiring-Partners/Elites.png', alt:'Elites'},
    { src: './Images/Hiring-Partners/Five-Star-Watches.png', alt:'Five-Star-Watches'},
    { src: './Images/Hiring-Partners/Fortnite-for-less.png', alt:'Fortnite-for-less'},
    { src: './Images/Hiring-Partners/HGroup-India.png', alt:'HGroup-India'},
    { src: './Images/Hiring-Partners/Hire-taxi.png', alt:'Hire-taxi'},
    { src: './Images/Hiring-Partners/Holy-Blood.png', alt:'Holy-Blood'},
    { src: './Images/Hiring-Partners/Hunt-for-electronics.png', alt:'Hunt-for-electronics'},
    { src: './Images/Hiring-Partners/Incredible-Blender.png', alt:'Incredible-Blender'},
    { src: './Images/Hiring-Partners/Invest-Reinvest.png', alt:'Invest-Reinvest'},
    { src: './Images/Hiring-Partners/Kids-Clothes.png', alt:'Kids-Clothes'},
    { src: './Images/Hiring-Partners/LS&W.png', alt:'Learn-Seo-&-Web-Design'},
    { src: './Images/Hiring-Partners/Monix.png', alt:'Monix'},
    { src: './Images/Hiring-Partners/Nivesh-Counsultant.png', alt:'Nivesh-Counsultant'},
    { src: './Images/Hiring-Partners/Perfume Breeze.png', alt:'Perfume Breeze'},
    { src: './Images/Hiring-Partners/Proptye.png', alt:'Proptye'},
    { src: './Images/Hiring-Partners/RealFinc.png', alt:'RealFinc'},
    { src: './Images/Hiring-Partners/Red-Club-VIP.png', alt:'Red-Club-VIP'},
    { src: './Images/Hiring-Partners/Renovin-Skin-Care.png', alt:'Renovin-Skin-Care'},
    { src: './Images/Hiring-Partners/Roof-&-Height.png', alt:'Roof-&-Height'},
    { src: './Images/Hiring-Partners/RR.png', alt:'RR'},
    { src: './Images/Hiring-Partners/SCHOLARS---The-Visa-Destination.png', alt:'SCHOLARS---The-Visa-Destination'},
    { src: './Images/Hiring-Partners/Show-discount.png', alt:'Shoe-Discount'},
    { src: './Images/Hiring-Partners/Sushma.png', alt:'Sushma'},
    { src: './Images/Hiring-Partners/The-Green-Nest.png', alt:'The-Green-Nest'},
    { src: './Images/Hiring-Partners/Virtual recipes.png', alt:'Virtual recipes'},
    { src: './Images/Hiring-Partners/Web-Hitters.png', alt:'Web-Hitters'},
  ];
// Auto-scroll effect
useEffect(() => {
  const slider = sliderRef.current;
  let scrollInterval;

  if (slider) {
    scrollInterval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: 150, behavior: 'smooth' });
      }
    }, 2000);
  }

  return () => clearInterval(scrollInterval);
}, []);

return (
  <div className="container mt-10 flex justify-center">
    <div className="text-center w-3/5">
      {/* Rating Section */}
      <h3 className="text-2xl font-bold mb-4">Rating & Review</h3>
      <div className="rating-container">
        <img src="./Images/Rating/Google-Rating.jpg" alt="Google Rating" />
        <img src="./Images/Rating/Jusdial-Rating.jpg" alt="Justdial Rating" />
        <img src="./Images/Rating/facebook review.jpg" alt="Facebook Review" />
      </div>

      {/* Associated With */}
      <h3 className="text-2xl font-bold mt-8 mb-4">Associated With</h3>
      <div className="associated-container">
        <div ref={sliderRef} className="associated-slider">
          {slides.map((slide, index) => (
            <img key={index} src={slide.src} alt={slide.alt} />
          ))}
        </div>
      </div>

      {/* Recruitment Partner */}
      <h3 className="text-2xl font-bold mt-8 mb-4">Recruitment Partner</h3>
      <div className="recruitment-container">
        <img src="./Images/Hiring-Partners/Move-ONN.png" alt="Move ONN" />
      </div>
    </div>
  </div>
);
};

export default RatingsAndReviews;