import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate(); // ✅ React Router Navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>About Us</li>
        
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          Our Courses
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => navigate("/SEO")}>SEO</li>
              <li>Web Design</li>
              <li onClick={() => navigate("/DM")}>Digital Marketing</li>
            </ul>
          )}
        </li>
        
        <li>Our Blog</li>
        <li>Contact Us</li>
        <li>Apply Jobs</li>
      </ul>
    </nav>
  );
};

export default Navbar;
