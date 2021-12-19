import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarStudent from '../Navbar/Navbar_Student';
import { Form, Input } from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';

class addedu extends Component {
  state: {
    courses: string;
    institute: string;
    marks: string;
    student_id: string;
    names: string;
  };

  constructor(props: any) {
    super(props);

    this.state = {
      courses: '',
      institute: '',
      marks: '',
      student_id: '',
      names: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.updateinstitute = this.updateinstitute.bind(this);
    this.updatemarks = this.updatemarks.bind(this);
    this.add_edu = this.add_edu.bind(this);
  }
  updateInput(event: any) {
    this.setState({ names: event.target.value });
  }
  updateinstitute(event: any) {
    this.setState({ institute: event.target.value });
  }
  updatemarks(event: any) {
    this.setState({ marks: event.target.value });
  }

  add_edu() {
    let arr = JSON.parse(localStorage.getItem('student') || '{}');
    console.log(this);
    console.log(this.state.names);
    console.log(this.state.institute);
    console.log(this.state.marks);
    // POST request using fetch with error handling
    const body = {
      course: this.state.names,
      institute: this.state.institute,
      marks: this.state.marks,
      student_id: arr._id,
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/student/addedu', body, {
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
        window.alert('Education Added Successfuly');
        window.location.replace('/studenthome');
      })
      .catch((error) => {
        console.error('There was an error!');
        window.alert('There was some error unable to create experience');
      });
  }

  render() {
    return (
      <>
        <NavbarStudent />
        <section className="image width height">
          <h3 className="card-title card_us">
            <strong>Add New Education</strong>
          </h3>
          <Form className="addjb margin-top">
            <FormItem>
              <div className="form-group margin-t ">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="Course"
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
                  placeholder="Institute"
                  onChange={this.updateinstitute}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="Marks"
                  onChange={this.updatemarks}
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top margin-b"
              onClick={this.add_edu}
              id="button"
              value="Add"
            />
          </Form>
        </section>
      </>
    );
  }
}

export default addedu;
