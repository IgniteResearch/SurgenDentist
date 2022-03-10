import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="main-home-navbar">
      <a className="logo d-none d-xl-block d-lg-block" href='/#'>
        <img src="/SPARKS-DENTAL-SKIN-AESTHETIC-CENTRE.png" alt="" /></a>
       <div
        className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link main-home-nav text-white" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link main-home-nav text-white" to="/dashboard/doctors">Doctors</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link main-home-nav text-white" to="/">Dental Service</Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link main-home-nav text-white" to="/">Reviews</Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="nav-link main-home-nav text-white" to="/">Blog</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link main-home-nav text-white" to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;