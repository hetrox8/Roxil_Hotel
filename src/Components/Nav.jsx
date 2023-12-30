// Nav.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      <a href="/">
        <img src={''} alt="Logo" />
      </a>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink to="/about_us" activeClassName="active-link">
            About Us
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink to="/contact_us" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink to="/restaurant" activeClassName="active-link">
            Restaurant
          </NavLink>
        </li>
      </ul>
      <button>
        <NavLink to="/book_now" activeClassName="active-link">
          Book Now
        </NavLink>
      </button>
    </nav>
  );
};

export default Nav;
