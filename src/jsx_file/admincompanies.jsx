import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_admin from './navbar_admin';
function Cards(props) {
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size left_m">View</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Admincompanies =() => {
    return (
        <>
        <Navbar_admin />
        <section className="image width">
                    <div className = "get_started">
                            <h2 className='text_center margintop'>
                             <strong className = "brand-name leftmargin">Companies</strong>
                            </h2>
                    </div>
                    <div className="gridwraper">
                        <Cards title="Companies" content="Some quick example text to build on the job title and make up the bulk of the Companies's content."/>
                        <Cards title="Companies" content="Some quick example text to build on the job title and make up the bulk of the Companies's content."/>
                        <Cards title="Companies" content="Some quick example text to build on the job title and make up the bulk of the Companies's content."/>
                        <Cards title="Companies" content="Some quick example text to build on the job title and make up the bulk of the Companies's content."/>
                        <Cards title="Companies" content="Some quick example text to build on the job title and make up the bulk of the Companies's content."/>
                    </div>
        </section>
        </>
    );
};

export default Admincompanies;