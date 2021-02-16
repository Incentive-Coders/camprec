import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';
import '../css/navbar.css'
import web from "../images/Capture-removebg-preview.png";

const Navbar = () => {
    return (
        <>
        <div className = "container-fluid nav_bg">
              <div className = "row">
                  <div className = "col-10 mx-auto">

                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to = "/">
    <img src={web} className = "image-fluid animated logo" alt = "home image"/>
    </NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink
          activeClassName = "menu_active" 
          exact 
          className="nav-link active" 
          aria-current="page" 
          to = "/"
          >
            Home
          
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          className="nav-link"
          exact
          activeClassName = "menu_active" 
          to = "/service"
          >Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName = "menu_active" 
          className="nav-link" 
          to = "/about"
          >
            About
          
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
          activeClassName = "menu_active" 
          className="nav-link" 
          to = "/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Navbar;