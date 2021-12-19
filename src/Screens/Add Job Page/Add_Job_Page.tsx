import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompany from '../Navbar/Navbar_Student';
import { Form, Input } from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
let arr = JSON.parse(localStorage.getItem('company') || '{}');
class addjobs extends Component {
  state: {
    job_title: string;
    location: string;
    job_description: string;
    company_id: string;
  };
  constructor(props: any) {
    super(props);

    this.state = {
      job_title: '',
      location: '',
      job_description: '',
      company_id: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.updatelocation = this.updatelocation.bind(this);
    this.updatejob_description = this.updatejob_description.bind(this);
    this.add_job = this.add_job.bind(this);
    this.updatecompany_id = this.updatejob_description.bind(this);
  }

  updateInput(event: any) {
    this.setState({ job_title: event.target.value });
  }

  updatelocation(event: any) {
    this.setState({ location: event.target.value });
  }
  updatejob_description(event: any) {
    this.setState({ job_description: event.target.value });
  }
  updatecompany_id(event: any) {
    this.setState({ company_id: event.target.value });
  }

  add_job() {
    let arr = JSON.parse(localStorage.getItem('company') || '{}');
    console.log(this);
    console.log(this.state.job_title);
    console.log(this.state.location);
    console.log(this.state.job_description);
    // POST request using fetch with error handling
    const body = {
      job_title: this.state.job_title,
      location: this.state.location,
      job_description: this.state.job_description,
      company_id: arr._id,
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/jobs/create', body, {
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
        window.alert('Job created Successfuly');
        window.location.replace('/companyjobs');
      })
      .catch((error) => {
        console.error('There was an error!');
        if (this.state.job_title && this.state.job_description) {
          window.alert('There was some error unable to create Job');
        }
      });
  }

  render() {
    return (
      <>
        <NavbarCompany />
        <section className="image width height">
          <h3 className="card-title card_us">
            <strong>Add New job</strong>
          </h3>
          <Form className="addjb margin-top">
            <FormItem>
              <div className="form-group margin-t ">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="Job title"
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
                  placeholder="Job location"
                  onChange={this.updatelocation}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="TEXT"
                  className="form-control size"
                  placeholder="Job Description"
                  onChange={this.updatejob_description}
                  required
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top margin-b"
              onClick={this.add_job}
              id="button"
              value="Submit"
            />
          </Form>
        </section>
      </>
    );
  }
}

export default addjobs;
