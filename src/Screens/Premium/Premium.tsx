const web = require('../../images/premium.png');
import React from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import Navbar_student from '../Navbar/Navbar_Student';

const premium = () => {
  return (
    <>
      <Navbar_student />
      <section id="header" className="bg d-flex align-items-center heights">
        <div className="contianer-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto pop">
              <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                <strong>
                  <h3 className="card-title brand-name  centers fsize2">
                    Apply for premium
                  </h3>
                </strong>
                <br />
                <br />
                <p className="card-text  fsize">
                  Apply and get free courses to certify your skills and bost
                  your resume{' '}
                </p>
                <div className="pop">
                  <a href="https://rzp.io/l/UnLNOUTzs" className="btn centers ">
                    Apply Now
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="\studenthome" className="btn centers ">
                    Apply later
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
      <div></div>
    </>
  );
};
export default premium;
