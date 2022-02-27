import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../css/navbar.css';
import web from '../../images/Capture-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function Student_Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row navbar">
          <div className="col-10 mx-auto navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid navbar" id="navbar-content">
                <NavLink className="navbar-brand col-sm-6" to="/studenthome">
                  <img
                    src={web}
                    className="image-fluid logo padl"
                    alt="home image"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse col-6"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
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
                        to="/studentcompanies"
                      >
                        companies
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/studentcourses"
                      >
                        Courses
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

export default Student_Navbar;
