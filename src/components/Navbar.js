import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/room">Room</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
