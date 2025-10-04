import React from 'react';
import { data } from '../restApi.json';
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            tempora atque inventore fuga eos. Ipsa excepturi atque in eligendi
            quam hic expedita.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map(item => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="not found" />
              <h3>{item.title}</h3>
              <button>{item.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
