import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_student from './navbar_student';
function Cards(props) {
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary margin-left text_size">Show Intrest</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Studentjobs =() => {
    return (
        <>
        <Navbar_student />
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
                    </div>
        </section>
        </>
    );
};

export default Studentjobs ;