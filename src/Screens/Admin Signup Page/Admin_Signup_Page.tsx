import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import "../css/home.css";
import "../css/login.css";
import FormItem from "antd/lib/form/FormItem";
import { Form, Input } from "antd";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

class adminSignup extends Component {
  state: {
    email: string;
    password: string;
    name: string;
    about: string;
    year_of_established: string;
    location: string;
    website: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    video_link: string;
    contactno: number;
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      about: "",
      year_of_established: "",
      location: "",
      website: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
      video_link: "",
      contactno: 0,
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

  updateInput(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateContactNo(event) {
    this.setState({ contactno: event.target.value });
  }

  updateAbout(event) {
    this.setState({ about: event.target.value });
  }

  updateYear(event) {
    this.setState({ year_of_established: event.target.value });
  }

  updateLocation(event) {
    this.setState({ location: event.target.value });
  }

  updateWebsite(event) {
    this.setState({ website: event.target.value });
  }

  updateTwitter(event) {
    this.setState({ twitter: event.target.value });
  }

  updateInstagram(event) {
    this.setState({ instagram: event.target.value });
  }

  updateFacebook(event) {
    this.setState({ facebook: event.target.value });
  }

  updateLinkedin(event) {
    this.setState({ linkedin: event.target.value });
  }

  updateVediolink(event) {
    this.setState({ video_link: event.target.value });
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
      video_link: this.state.video_link,
      approve: false,
    };
    const header = {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    };
    axios
      .post("https://camprec.herokuapp.com/api/college/signup", body, {
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
        localStorage.setItem("college", JSON.stringify(response.data));
        window.location.replace("/home");
      })
      .catch((error) => {
        console.error("There was an error!");
        if (this.state.email && this.state.password) {
          window.alert("Error");
        }
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="image width">
          <h3 className="card-title card_us">
            <strong>College Signup</strong>
          </h3>
          <Form className="editjb margin-top center m-l">
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className=" boderb form-control "
                  placeholder="college email"
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
                  placeholder="college Password"
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
                  placeholder="college name"
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
                  placeholder="college location"
                  onChange={this.updateLocation}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="college year of establishment"
                  onChange={this.updateYear}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t center">
                <Input
                  type="TEXT"
                  className="boderb form-control"
                  placeholder="college Website"
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
                  placeholder="college facebook-link"
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
                  placeholder="college LinkedIn-link"
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
                  placeholder="college instagram-link"
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
                  placeholder="college twitter-link"
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
                    placeholder="college Description"
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

export default adminSignup;
