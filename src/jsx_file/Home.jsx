import React from 'react';
import web from "../images/4180157-removebg-preview.png";
import "../index.css";
import"../css/home.css";
const Home =() => {
    return (
        <>
        <section id = "header" className = "">
            <div className = "contianer-fluid nav_bg">
                <div className = "row">
                    <div className = "col-10 mx-auto home">
                        <div className = "col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                            <h2>
                                Get hired by the company of your choice with <strong className = "brand-name">Camprec</strong>
                            </h2>
                            <h5 className = "my-3">
                                An online portal to make heptic hiring process easy
                            </h5>
                            <div className="mt-3">
                                <a href = "" className = "btn"> 
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-2 header-img">
                            <img src={web} className = "image-fluid animated" alt = "home image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;
