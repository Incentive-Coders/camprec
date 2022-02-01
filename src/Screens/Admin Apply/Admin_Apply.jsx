/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Admin_jobs_page from '../Admin Jobs Page/Admin_Jobs_Page';

const l = window.location.href;
const a = l.split('=');
console.log(a[1]); // above console log ---- Company id
const arr = JSON.parse(localStorage.getItem('college') || '{}');

class adminapply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      k: false,
    };
  }

  capply() {
    const body = {
      job_id: a[1],
      college_id: arr._id,
    };
    console.log(body);
    const header = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    console.log(arr._id);
    // POST request using fetch with error handling
    axios
      .post('http://localhost:4000/api/jobs/caccept', body, {
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
      })
      .catch((error) => {
        console.error('There was an error!');
      });
    axios
      .post('http://localhost:4000/api/college/jaccept', body, {
        headers: { header },
      })
      .then((response) => {
        console.log('*');
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        this.setState({
          k: true,
        });
        //alert('Thank you for applying!');
      }, adminapply.bind)
      .catch((error) => {
        console.error('There was an error!');
      });
  }

  componentDidMount() {
    this.capply();
  }

  render() {
    return (
      <>
        {this.state.k ? (
          (alert('Thank you for applying'),
          window.location.replace('/admincompanies'))
        ) : (
          <section className="pop image width">
            <div className="load">
              <ReactLoading
                type="spinningBubbles"
                color="white"
                height="120px"
                width="120px"
              />
            </div>
          </section>
        )}
      </>
    );
  }
}

export default adminapply;
