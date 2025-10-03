import React, { useState } from 'react';
import { data } from '../restApi.json';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">Foodie</div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          {data[0].navbarLinks.map(item => (
            <Link
              key={item.id}
              to={item.link}
              spy={true}
              duration={500}
              smooth={true}
            >
              {item.title}
            </Link>
          ))}
          <button className="menuBtn">OUR MENUE</button>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
