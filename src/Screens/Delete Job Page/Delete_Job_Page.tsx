import React from 'react';
import { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const l = window.location.href;
const a = l.split('=');
console.log(a[1]);

class deljobs extends Component {
  state: { job_id: string; job_description: string; job_title: string };
  constructor(props: any) {
    super(props);

    this.state = {
      job_id: '',
      job_description: '',
      job_title: '',
    };

    this.del_job = this.del_job.bind(this);
  }

  del_job() {
    // POST request using fetch with error handling
    const arr = JSON.parse(localStorage.getItem('company') || '{}');
    const body = {
      job_id: a[1],
      company_id: arr._id,
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/jobs/delete', body, {
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
        window.alert('Job deleteded Successfuly');
        window.location.replace('/companyjobs');
      })
      .catch((error) => {
        console.error('There was an error!');
        if (this.state.job_title && this.state.job_description) {
          window.alert('There was some error unable to deling Job');
        }
      });
  }

  companyjoblist() {
    const arr = JSON.parse(localStorage.getItem('company') || '{}');
    const body = {
      company_id: arr._id,
    };
    const header = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    const job: never[] = [];
    // POST request using fetch with error handling
    axios
      .post('https://camprec.herokuapp.com/api/jobs/list', body, {
        headers: { header },
      })
      .then(function (response) {
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error =
            (response.data && response.data.message) || response.status;
          return Promise.reject(error);
        }
        localStorage.setItem('jobs', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        window.alert('something went wrong');
      });
    if (job) return job;
  }

  render() {
    this.del_job();
    return null;
  }
}

export default deljobs;
