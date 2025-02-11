import { useState } from "react";
import "./Hiring-Partners.css"; // Add this CSS file

export default function HiringPartners() {
  const [showMore, setShowMore] = useState(false);

  const initialPartners = [
    "AKS-Developers.png", "SCHOLARS---The-Visa-Destination.png",
    "Move ONN.png", "RR.png", "Women-Care-Clinic.png",
    "LS&W.png", "Web-Hitters.png", "Hire-taxi.png",
    "Holy-Blood.png", "CREx-Property.png", "Book-My-Air-Travel.png",
    "Invest-Reinvest.png", "Sushma.png", "Unico Designs.png", "Arvind-Herbal-Labs.png",
    "Architects-Group.png"
  ];

  const morePartners = [
    "BEST-IELTS-COACHING-INSTITUTE-IN-CHANDIGARH.png",
    , "Nivesh-Counsultant.png",
    "Proptye.png", "Browse-Wheels.png", "HGroup-India.png",
    "RealFinc.png", "The-Green-Nest.png", "Show-discount.png",
    "Roof-&-Height.png", "Adore-me-boutique.png" , "Art.png"
  ];

  return (
    <div className="hiring-container">
      <h2 className="title">Our <span className="highlight">Hiring Partners</span></h2>

      <div className="grid-container">
        {initialPartners.map((partner, index) => (
          <div key={index} className="card">
            <img src={`/Images/Hiring-Partners/${partner}`} alt={partner} className="logo" />
          </div>
        ))}
      </div>

      {showMore && (
        <div className="grid-container">
          {morePartners.map((partner, index) => (
            <div key={index} className="card">
              <img src={`/Images/Hiring-Partners/${partner}`} alt={partner} className="logo" />
            </div>
          ))}
        </div>
      )}

      <button onClick={() => setShowMore(!showMore)} className="toggle-btn">
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
