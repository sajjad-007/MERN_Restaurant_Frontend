import React from 'react';
import { data } from '../restApi.json';
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ex amet
            laborum nisi explicabo blanditiis sit sapiente inventore nihil.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map(item => (
            <div className="card" key={item.id}>
              <img src={item.image} alt="img not found" />
              <h3>{item.name}</h3>
              <p>{item.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
