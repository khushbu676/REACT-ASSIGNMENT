import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png'; // Add your logo image in the src folder

function NavbarBottom() {
  return (
    <div className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
       
      </div>

      <div className="search-section">
        <select>
          <option value="all">All Categories</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
        </select>
        <input type="text" placeholder="Search" />
        <button className="search-btn">🔍</button>
      </div>

      <div className="icons-section">
        <select className="location-dropdown">
          <option>Your Location</option>
        </select>
        <div className="icon">🔄 Compare</div>
        <div className="icon">❤️ Wishlist</div>
        <div className="icon">🛒 Cart</div>
        <div className="icon">👤 Account</div>
      </div>
    </div>
  );
}

export default NavbarBottom;
