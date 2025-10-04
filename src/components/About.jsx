import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About us</h1>
            <p>We love to eat delicious food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus rerum, tenetur culpa, minus debitis delectus possimus accusamus minima nulla esse explicabo vel temporibus maxime ipsam. Facere accusamus optio vero!
          </p>
            <Link to="/">
                Explore More <span><HiOutlineArrowNarrowRight/></span>
            </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about img not found" />
        </div>
      </div>
    </div>
  );
};

export default About;
