import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img
          src="/notFound.svg"
          alt="notFound"
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            margin: '0 auto',
          }}
        />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find you the page you're looking for</p>
        <Link to={'/'}>Back to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
