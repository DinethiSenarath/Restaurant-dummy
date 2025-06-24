import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/lg.png';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <span className="nav-text">Home</span>
          </Link>
        </li>
        
        <li 
          className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="nav-link dropdown-trigger">
            <span className="nav-text">Accommodations</span>
            <svg 
              className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="currentColor"
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <Link to="/accommodations/single" className="dropdown-link">
                <div className="dropdown-icon">🛏️</div>
                <div className="dropdown-content">
                  <span className="dropdown-title">Single Room</span>
                  <span className="dropdown-desc">Cozy comfort for solo travelers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/accommodations/double" className="dropdown-link">
                <div className="dropdown-icon">🏨</div>
                <div className="dropdown-content">
                  <span className="dropdown-title">Double Room</span>
                  <span className="dropdown-desc">Perfect for couples & friends</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/accommodations/deluxe" className="dropdown-link">
                <div className="dropdown-icon">👑</div>
                <div className="dropdown-content">
                  <span className="dropdown-title">Deluxe Suite</span>
                  <span className="dropdown-desc">Luxury experience awaits</span>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        
        <li className="nav-item">
          <Link to="/facilities" className="nav-link">
            <span className="nav-text">Facilities</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/wedding" className="nav-link">
            <span className="nav-text">Wedding</span>
          </Link>
        </li>
      </ul>

      <div className="navbar-logo">
        <div className="logo-container">
          <img src={logo} alt="Hotel Logo" className="logo-image" />
        </div>
      </div>

      <ul className="navbar-right">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <span className="nav-text">About Us</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <span className="nav-text">Contact Us</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/experience" className="nav-link">
            <span className="nav-text">Experience</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">
            <span className="nav-text">Gallery</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;