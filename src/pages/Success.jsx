import React, { use, useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  //preCountDown = 10
  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setInterval(() => {
      setCountDown(preCountDown => {
        if (preCountDown === 1) {
          navigate('/');
        }
        return preCountDown - 1;
      });
    }, 1000);
    return () => clearInterval(timeOut);
  }, []);
  return (
    <section className="notFound successPage">
      <div className="container">
        <img
          src="/sandwich.png"
          alt="success"
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto',
            margin: '0 auto',
          }}
        />
        <h1>Redirecting to Home in {countDown} seconds...</h1>
        <Link to="/">Back to Homepage</Link>
      </div>
    </section>
  );
};

export default Success;
