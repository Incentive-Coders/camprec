import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import '../../css/home.css';
import web5 from '../../images/company_login.png';
import '../../css/login.css';
import FormItem from 'antd/lib/form/FormItem';
import { Form, Input } from 'antd';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { string } from 'prop-types';

class CompanySignup extends Component {
  state: {
    email: string;
    password: string;
    names: string;
    about: string;
    year_of_established: string;
    location: string;
    website: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    vedio_link: string;
    contactno: string;
  };
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
      names: '',
      contactno: '',
      about: '',
      year_of_established: '',
      location: '',
      website: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      vedio_link: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login_link = this.login_link.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateContactNo = this.updateContactNo.bind(this);
    this.updateAbout = this.updateAbout.bind(this);
    this.updateYear = this.updateYear.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateWebsite = this.updateWebsite.bind(this);
    this.updateTwitter = this.updateTwitter.bind(this);
    this.updateInstagram = this.updateInstagram.bind(this);
    this.updateLinkedin = this.updateLinkedin.bind(this);
    this.updateFacebook = this.updateFacebook.bind(this);
    this.updateVediolink = this.updateVediolink.bind(this);
  }

  updateInput(event: any) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event: any) {
    this.setState({ password: event.target.value });
  }

  updateName(event: any) {
    this.setState({ name: event.target.value });
  }

  updateContactNo(event: any) {
    this.setState({ contactno: event.target.value });
  }

  updateAbout(event: any) {
    this.setState({ about: event.target.value });
  }

  updateYear(event: any) {
    this.setState({ year_of_established: event.target.value });
  }

  updateLocation(event: any) {
    this.setState({ location: event.target.value });
  }

  updateWebsite(event: any) {
    this.setState({ website: event.target.value });
  }

  updateTwitter(event: any) {
    this.setState({ twitter: event.target.value });
  }

  updateInstagram(event: any) {
    this.setState({ instagram: event.target.value });
  }

  updateFacebook(event: any) {
    this.setState({ facebook: event.target.value });
  }

  updateLinkedin(event: any) {
    this.setState({ linkedin: event.target.value });
  }

  updateVediolink(event: any) {
    this.setState({ vedio_link: event.target.value });
  }

  login_link() {
    console.log(this.state.email);
    console.log(this.state.password);
    {
      string;
    }
    // POST request using fetch with error handling
    const body = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.names,
      contactno: this.state.contactno,
      location: this.state.location,
      year_of_established: this.state.year_of_established,
      about: this.state.about,
      website: this.state.website,
      social_media: {
        linkedin: this.state.linkedin,
        instagram: this.state.instagram,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
      },
      vedio_link: this.state.vedio_link,
      approve: false,
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/company/signup', body, {
        headers: { header },
      })
      .then(function (response) {
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        localStorage.setItem('company', JSON.stringify(response.data));
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
            <strong>Company Signup</strong>
          </h3>
          <Form className="editjb margin-top center m-l">
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="Company email"
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
                  placeholder="Company Password"
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
                  placeholder="Company name"
                  onChange={this.updateName}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="Company location"
                  onChange={this.updateLocation}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="Company year of establishment"
                  onChange={this.updateYear}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="Company Website"
                  onChange={this.updateWebsite}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control"
                  placeholder="Company facebook-link"
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
                  placeholder="Company LinkedIn-link"
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
                  placeholder="Company instagram-link"
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
                  placeholder="Company twitter-link"
                  onChange={this.updateTwitter}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="Disc Vedio Link"
                  onChange={this.updateVediolink}
                  required
                />
              </div>
              <FormItem>
                <div className="form-group margin-t center">
                  <Input
                    type="TEXT"
                    className="boderb form-control size"
                    placeholder="Company Description"
                    onChange={this.updateAbout}
                    required
                  />
                </div>
              </FormItem>
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

export default CompanySignup;
