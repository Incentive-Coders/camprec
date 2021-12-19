import React from 'react';
const web = require('../../images/4180157-removebg-preview.png');
const web1 = require('../../images/student-removebg.png');
const web2 = require('../../images/company.jpg');
const web3 = require('../../images/admin.jpg');
const web4 = require('../../images/Capture-removebg-preview.png');
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../index.css';
import '../../css/home.css';
import './App';
import CountUp from 'react-countup';
function Home() {
  localStorage.clear();
  return (
    <>
      <Navbar />
      <section id="header" className="bg d-flex align-items-center">
        <div className="contianer-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto home ">
              <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                <h2>
                  Get hired by the company of your choice with{' '}
                  <strong className="brand-name">Camprec</strong>
                </h2>
                <h5 className="mt-3">
                  An online portal to make heptic hiring process easy
                </h5>
                <div className="mt-3">
                  <a href="#join-us" className="btn">
                    Get Started
                  </a>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 header-img animated ">
                <img
                  src={web}
                  className="image-fluid animated"
                  alt="home img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="join-us">
        <img src={web4} className="logo logos" alt="home img" />
        <div className="my-5 mx-auto align-item-center ">
          <h1 className="tab-center align-item-center join_us">
            {' '}
            <strong>Join us</strong>
          </h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card_border">
                  <div className="card-body card_us">
                    <img
                      src={web1}
                      className="student card_us"
                      alt="home img"
                    />
                    <h5 className="card-title">
                      <strong>For Student</strong>
                    </h5>
                    <p className="card-text">
                      You are on Right Track. Working with you to Achieve
                      Vision. Join us to get your dream company.
                    </p>
                    <NavLink className="btn left" to="/studentsignup">
                      Signup
                    </NavLink>
                    <NavLink className="btn" to="/studentlogin">
                      Login
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card_border">
                  <div className="card-body card_us">
                    <img
                      src={web2}
                      className="company card_us"
                      alt="home img"
                    />
                    <h5 className="card-title">
                      <strong>For Company</strong>
                    </h5>
                    <p className="card-text">
                      The Key To Success Is Staying On Target so, we are the one
                      who provides you. Choose the best employees amongst the
                      best.
                    </p>
                    <NavLink className="btn left" to="/companysignup">
                      Signup
                    </NavLink>
                    <NavLink className="btn" to="/companylogin">
                      Login
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card card_border">
                  <div className="card-body card_us">
                    <img
                      src={web3}
                      className="company card_us"
                      alt="home img"
                    />
                    <h5 className="card-title card_us">
                      <strong>For College Admin</strong>
                    </h5>
                    <p className="card-text">
                      We are here to manage and interlink between companies and
                      students as a invisible string.Keep Calm and Focused.
                    </p>
                    <NavLink className="btn left" to="/adminsignup">
                      Signup
                    </NavLink>
                    <NavLink className="btn" to="/adminlogin">
                      Login
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="pop bg margin-t-l">
        <div className="join_us pader">
          <h2 className="tab-center align-item-center card-title card_us color">
            <strong>Student</strong>
          </h2>
          <CountUp end={35000} duration={15} />
        </div>
        <div className="join_us pader">
          <h2 className="tab-center align-item-center card-title  color">
            <strong>Companies</strong>
          </h2>
          <CountUp end={500} duration={15} />
        </div>
        <div className="join_us pader">
          <h2 className="tab-center align-item-center card-title card_us color">
            <strong>Colleges</strong>
          </h2>
          <CountUp end={150} duration={15} />
        </div>
      </footer>
    </>
  );
}

export default Home;
