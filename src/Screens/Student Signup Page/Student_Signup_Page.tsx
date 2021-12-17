import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../css/home.css';
import '../css/login.css';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input } from 'antd';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

class studentSignup extends Component <{}, { email : any , password : any,name : any,contactno : any,about : any,college : any,cgpa : any,twitter : any,facebook : any,linkedin : any, instagram : any}>{
  constructor(props : any) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      contactno: '',
      about: '',
      college: '',
      cgpa: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login_link = this.login_link.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateContactNo = this.updateContactNo.bind(this);
    this.updateAbout = this.updateAbout.bind(this);
    this.updateCgpa = this.updateCgpa.bind(this);
    this.updateCollege = this.updateCollege.bind(this);
    this.updateTwitter = this.updateTwitter.bind(this);
    this.updateInstagram = this.updateInstagram.bind(this);
    this.updateLinkedin = this.updateLinkedin.bind(this);
    this.updateFacebook = this.updateFacebook.bind(this);
  }

  updateInput(event : any) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event : any) {
    this.setState({ password: event.target.value });
  }

  updateName(event : any) {
    this.setState({ name: event.target.value });
  }

  updateContactNo(event : any) {
    this.setState({ contactno: event.target.value });
  }

  updateAbout(event : any) {
    this.setState({ about: event.target.value });
  }

  updateCollege(event : any) {
    this.setState({ college: event.target.value });
  }

  updateCgpa(event : any) {
    this.setState({ cgpa: event.target.value });
  }

  updateTwitter(event : any) {
    this.setState({ twitter: event.target.value });
  }

  updateInstagram(event : any) {
    this.setState({ instagram: event.target.value });
  }

  updateFacebook(event : any) {
    this.setState({ facebook: event.target.value });
  }

  updateLinkedin(event : any) {
    this.setState({ linkedin: event.target.value });
  }

  login_link() {
    console.log(this.state.email);
    console.log(this.state.password);
    // POST request using fetch with error handling
    const body = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      contactno: this.state.contactno,
      about: this.state.about,
      college: this.state.college,
      cgpa: this.state.cgpa,
      social_media: {
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
      },
      resume: '',
      premium: false,
      approve: false,
    };
    console.log(body);
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/student/signup', body, {
        header,
      })
      .then(function (response) {
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        window.location.replace('/home');
      })
      .catch((error) => {
        console.error('There was an error!');
        if (this.state.email && this.state.password) {
          window.alert('Error');
        }
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="image width">
          <h3 className="card-title card_us">
            <strong>Student Signup</strong>
          </h3>
          <Form className="editjb margin-top center m-l">
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="student email"
                  onChange={this.updateInput}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="password"
                  className=" boderb form-control "
                  placeholder="student Password"
                  onChange={this.updatePassword}
                  required
                />
              </div>
            </FormItem>

            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="student name"
                  onChange={this.updateName}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="student contact no"
                  onChange={this.updateContactNo}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="student College"
                  onChange={this.updateCollege}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="student CGPA"
                  onChange={this.updateCgpa}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control"
                  placeholder="student facebook-link"
                  onChange={this.updateFacebook}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="student LinkedIn-link"
                  onChange={this.updateLinkedin}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="student instagram-link"
                  onChange={this.updateInstagram}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="student twitter-link"
                  onChange={this.updateTwitter}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control size"
                  placeholder="student Description"
                  onChange={this.updateAbout}
                  required
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top m-l2 center"
              onClick={this.login_link}
              id="button"
              value="Submit"
            />
          </Form>
        </div>
      </>
    );
  }
}

export default studentSignup;
