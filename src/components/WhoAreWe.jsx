import React from 'react';
import { data } from '../restApi.json';

const WhoAreWe = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        <div className="text_banner">
          {data[0].who_we_are.slice(0, 2).map(item => (
            <div className="card" key={item.id}>
              <h1>{item.number}</h1>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="image_banner">
          <img src="/center.svg" alt="img not found" className="gradient_bg" />
          <img src="/whoweare.png" alt="img not found" />
        </div>
        <div className="text_banner">
          {data[0].who_we_are.slice(2, 4).map(item => (
            <div className="card" key={item.id}>
              <h1>{item.number}</h1>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
