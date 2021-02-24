import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_company from './navbar_company';
function Cards(props) {
    return (
                <>
                   <div class="card widths" >
                        <div class="card-body">
                            <strong><h4 class="card-title  centers">{props.title}</h4></strong>
                            <p class="card-text">{props.content}</p>
                            <a href="#" class="btn btn-primary  margin_left">APPLY</a>
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
                    </div>
        </section>
        </>
    );
};

export default Companyjobs ;