import React, { Component } from 'react';
import web from '../../images/about.png';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import Navbar from '../Navbar/Navbar';

const googleAdId = 'ca-pub-3329798013899959';

type GoogleAdInterface = {
  classNames: string;
  slot: string;
  timeout: number;
};

class GoogleAd extends Component<GoogleAdInterface> {
  public static defaultProps = {
    classNames: '',
    timeout: 200,
  };

  googleInit = null;
  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot } = this.props;

    return (
      <>
        <Navbar />
        <section className="image width">
          <div className="contianer-fluid ">
            <div className="row ">
              <div className="col-10 mx-auto home">
                <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                  <h2 className="text_center  ">
                    <strong className="brand-name">About Us</strong>
                  </h2>
                  <p className="mt-3 textjustify about">
                    This is college recruitment system. We are to help you. It
                    is a best platform for companies and student. We will
                    provide best companies for students and vice versa. It has
                    options like student login, company login and admin login.
                    Here students can create their own profile and able to
                    manage it (means they can edit their some details only after
                    authorization of admin). And also are able to see all
                    companies where vacancy is available and can apply for a
                    company. And Companies are also able to create their own
                    business profile. They can post vacancies in their companie.
                    And they can see student list those who are applied for
                    those vacancies. Here we are the soure between students and
                    companies which bring company & student closer. We have
                    overall access for company and student details. And we will
                    provide verification to company which is registered in it &
                    also have authority to delete any student & company profile
                    which goes beyond admin policies. This is a very important
                    project for students, companies and for college placement
                    officer.
                  </p>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 header-img animated leftmargin">
                  <img
                    src={web}
                    className="image-fluid animated aboutimg"
                    alt="about img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classNames}>
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={googleAdId}
              data-ad-slot={slot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </section>
      </>
    );
  }
}

export default GoogleAd;
