import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import { NavLink } from "react-router-dom";
import Navbar_company from './navbar_company';
import web from "../images/add.png";
function Cards(props) {
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size margin_left">Show Aplicants</a>
                            <a href="#" className="btn btn-primary  text_size margin_left">Edit</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Companyjobs =() => {
    return (
        <>
        <Navbar_company />
        <section className="image width">
                    <div className = "get_started">
                            <h2 className='text_center margintop'>
                             <strong className = "brand-name leftmargin">Jobs</strong>
                            </h2>
                    </div>
                    <div className="gridwraper">
                        <Cards title="Jobs" content="Some quick example text to build on the job title and make up the bulk of the job's content."/>
                        <Cards title="Jobs" content="Some quick example text to build on the job title and make up the bulk of the job's content."/>
                        <Cards title="Jobs" content="Some quick example text to build on the job title and make up the bulk of the job's content."/>
                        <Cards title="Jobs" content="Some quick example text to build on the job title and make up the bulk of the job's content."/>
                        <Cards title="Jobs" content="Some quick example text to build on the job title and make up the bulk of the job's content."/>
                        <div className="card3 widths" >
                        <div className="card-body">
                            <NavLink to='/addjobs'><img src={web} className="addheight"/></NavLink> 
                        </div>
                    </div>
                    </div>
        </section>
        </>
    );
};

export default Companyjobs ;