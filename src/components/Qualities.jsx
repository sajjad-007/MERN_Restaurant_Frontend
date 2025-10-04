import React from 'react';
import { data } from '../restApi.json';
const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {data[0].ourQualities.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="img not found" />
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
