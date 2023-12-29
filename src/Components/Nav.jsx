import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <a href="/">
        <img src={''} alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about_us">About Us</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li>
            <Link to="/restaurant">Restaurant</Link>
          </li>
        </ul>
        <button>
          <Link to="/book_now">Book Now</Link>
        </button>
      </nav>
    </>
  );
};

export default Nav;
