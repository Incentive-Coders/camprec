import React from 'react';
import web from "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\src\\images\\4180157-removebg-preview.png";
import "../index.css";
const Home =() => {
    return (
        <>
        <section id = "header" className = "">
            <div className = "contianer-fluid nav_bg">
                <div className = "row">
                    <div className = "col-10 mx-auto">
                        <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>
                                Get hired by the company of your choice with <strong className = "brand-name">Camprec</strong>
                            </h1>
                            <h2 className = "my-3">
                                An online portal to make heptic hiring process easy
                            </h2>
                            <div className="mt-3">
                                <a href = "" className = "btn"> 
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
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
