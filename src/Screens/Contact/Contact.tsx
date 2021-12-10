import React from 'react';
const web = require('../images/contactus.png');
import '../index.css';
import '../css/home.css';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import emailjs from 'emailjs-com';
import FormItem from 'antd/lib/form/FormItem';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'default_service',
        'camprectemplate',
        e.target,
        'user_yvU8BsXFsDcsmwHoVWiWs'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert('Sent');
        },
        (error) => {
          console.log(error.text);
          window.alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Navbar />
      <section className="image width">
        <div className="contianer">
          <div className="row ">
            <div className="col-10 mx-auto home">
              <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started ">
                <div className="card-body card_us topmargin">
                  <h3 className="card-title card_us">
                    <strong>Contact Us</strong>
                  </h3>
                  <form className="contact-form" onSubmit={sendEmail}>
                    <FormItem>
                      <div className="form-group margin-t">
                        <input
                          type="TEXT"
                          className="form-control"
                          placeholder="ENTER YOUR NAME"
                          name="name"
                          required
                        />
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="form-group margin-t">
                        <input
                          type="TEXT"
                          className="form-control"
                          placeholder="ENTER YOUR EMAIL-ID"
                          name="email"
                          required
                        />
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="form-group margin-t">
                        <input
                          type="TEXT"
                          className="form-control"
                          placeholder="Contact no."
                          name="contact"
                          required
                        />
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="form-group margin-t">
                        <input
                          type="TEXT"
                          className="form-control"
                          placeholder="SUBJECT"
                          name="subject"
                          required
                        />
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="form-group margin-t">
                        <input
                          type="TEXT"
                          className="size form-control"
                          placeholder="MESSAGE "
                          name="message"
                          required
                        />
                      </div>
                    </FormItem>
                    <input
                      type="submit"
                      className="btn margin-t"
                      id="button"
                      value="Submit"
                    />
                  </form>
                </div>
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
      </section>
    </>
  );
}

export default Contact;
