import React from 'react';
import web from "../images/4180157-removebg-preview.png";
import web1 from "../images/student-removebg.png"
import web2 from "../images/company.jpg";
import web3 from "../images/admin.jpg";
import web4 from "../images/Capture-removebg-preview.png";
import {Link, NavLink} from 'react-router-dom';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "../index.css";
import"../css/home.css";
import"./App"
import reactimportCountUp from 'react-countup';
const Home =() => {
    return (
      <>
      <Navbar/>
        <section id = "header" className = "bg d-flex align-items-center">
            <div className = "contianer-fluid ">
                <div className = "row ">
                    <div className = "col-10 mx-auto home ">
                        <div className = "col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                            <h2>
                                Get hired by the company of your choice with <strong className = "brand-name">Camprec</strong>
                            </h2>
                            <h5 className = "mt-3">
                                An online portal to make heptic hiring process easy
                            </h5>
                            <div className="mt-3">
                                <a href = "#join-us" className = "btn"> 
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 header-img animated ">
                            <img src={web} className = "image-fluid animated" alt = "home img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id = "join-us">
        <img src={web4} className = "logo logos" alt = "home img"/>
        <div className = "my-5 mx-auto align-item-center ">
            <h1 className="tab-center align-item-center join_us"> <strong>Join us</strong></h1>
        </div>
        <div className = "row">
            <div className="col-10 mx-auto">
                <div className = "row">
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border" >
                            <div class="card-body card_us">
                                <img src={web1} className = "student card_us" alt = "home img"/>
                                <h5 class="card-title"><strong>For Student</strong></h5>
                                <p class="card-text">You are on Right Track. Working with you to Achieve Vision. Join us to get your dream company.</p>
                                <NavLink className="btn" to = "/studentlogin">
                                        Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border" >
                            <div class="card-body card_us">
                            <img src={web2} className = "company card_us" alt = "home img"/>
                                <h5 class="card-title"><strong>For Company</strong></h5>
                                <p class="card-text">The Key To Success Is Staying On Target so, we are the one who provides you. Choose the best employees amongst the best.</p>
                                <NavLink className="btn" to = "/companylogin">
                                        Login
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border">
                            <div class="card-body card_us">
                            <img src={web3} className = "company card_us" alt = "home img"/>
                                <h5 class="card-title card_us"><strong>For College Admin</strong></h5>
                                <p class="card-text">We are here to manage and interlink between companies and students as a invisible string.Keep Calm and Focused.</p>
                                <NavLink className="btn" to = "/adminlogin">
                                        Login
                                </NavLink>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <footer className='pop color padding-b backg'>
        <div className='join_us pader'>
                <h2 className='tab-center align-item-center card-title card_us color'><strong>Student</strong></h2>
                <CountUp 
                    end={30000}
                    duration={8}
                />
            </div>
            <div className='join_us pader'>
                <h2 className='tab-center align-item-center card-title  color'><strong>Companies</strong></h2>
                <CountUp 
                    end={300}
                    duration={8}
                />
            </div>
            <div className='join_us pader'>
                <h2 className='tab-center align-item-center card-title card_us color'><strong>Colleges</strong></h2>
                <CountUp 
                    end={100}
                    duration={8}
                />
            </div>
            
        </footer>
        </>
    );
};

export default Home;
