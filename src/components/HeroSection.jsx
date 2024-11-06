import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>We Make Your Dream - A reality</h3>
        <div>
          <h1>Let's create Magic together</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the
            Miracles!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
