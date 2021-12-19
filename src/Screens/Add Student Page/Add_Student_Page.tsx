import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarAddStudent from '../Navbar/Navbar_Add_Student';
import { Form, Input } from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
let arr = JSON.parse(localStorage.getItem('college') || '{}');
class addstudent extends Component {
  state: {
    name: string;
    email: string;
    cgpa: string;
    password: string;
  };
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cgpa: '',
      password: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateCgpa = this.updateCgpa.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.add_student = this.add_student.bind(this);
  }

  updateInput(event: any) {
    this.setState({ name: event.target.value });
  }
  updateCgpa(event: any) {
    this.setState({ cgpa: event.target.value });
  }
  updateEmail(event: any) {
    this.setState({ email: event.target.value });
  }
  updatePassword(event: any) {
    this.setState({ password: event.target.value });
  }

  add_student() {
    let arr = JSON.parse(localStorage.getItem('college') || '{}');
    console.log(this);
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(arr.name);
    // POST request using fetch with error handling
    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cgpa: this.state.cgpa,
      college: arr.name,
      about: '',
      date_of_birth: '',
      skills: [''],
      contactno: '',
      resume: '',
      social_media: {
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        github: '',
      },
      certification: [
        {
          courses: '',
          institutes: '',
          valid_till: '',
          links: '',
        },
      ],
      education: [
        {
          course: '',
          institute: '',
          marks: '',
        },
      ],
      experience: [
        {
          names: '',
          description: '',
          companys: '',
          duration: '',
          link: '',
        },
      ],
      premium: 'false',
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/student/signup', body, {
        headers: { header },
      })
      .then(function (response) {
        console.log('*');
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        window.alert('Student added Successfuly');
        window.location.replace('/adminstudent');
      })
      .catch((error) => {
        console.error('There was an error!');
      });
  }

  render() {
    return (
      <>
        <NavbarAddStudent />
        <section className="image width height">
          <h3 className="card-title card_us">
            <strong>Add New Student</strong>
          </h3>
          <Form className="addjb margin-top">
            <FormItem>
              <div className="form-group margin-t ">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="Name"
                  onChange={this.updateInput}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="Email"
                  onChange={this.updateEmail}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.updatePassword}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="CGPA"
                  onChange={this.updateCgpa}
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top margin-b"
              onClick={this.add_student}
              id="button"
              value="Submit"
            />
          </Form>
        </section>
      </>
    );
  }
}

export default addstudent;
