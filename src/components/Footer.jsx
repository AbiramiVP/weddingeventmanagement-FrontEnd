import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>Dream Maker's</h1>
          <p>Life's Occassions</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive latest updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
