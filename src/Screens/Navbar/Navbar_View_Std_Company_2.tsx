import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../css/navbar.css';
const web = require('../../images/Capture-removebg-preview.png');
function Navbar_viewstdcompany() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row navbar">
          <div className="col-10 mx-auto navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid navbar">
                <NavLink className="navbar-brand" to="/studenthome">
                  <img
                    src={web}
                    className="image-fluid  logo padl"
                    alt="home image"
                  />
                </NavLink>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/studenthome"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/studentjobs"
                      >
                        jobs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/viewstudentcompany"
                      >
                        back
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/logout"
                      >
                        Logout
                      </NavLink>
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
}

export default Navbar_viewstdcompany;
