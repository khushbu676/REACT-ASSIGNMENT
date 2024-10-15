import React from 'react';
import './App.css';





const Banner = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Don't miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <div className="newsletter">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
