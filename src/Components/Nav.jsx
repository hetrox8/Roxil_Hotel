import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Nav.css';
const Nav = () => {
  return (
    <>
     
      <nav className='nav-bar'>
      <a href="/">
        <img src={''} alt="Logo" />
      </a>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-li'>
            <Link to="/about_us">About Us</Link>
          </li>
          <li className='nav-li'>
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li className='nav-li'>
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
