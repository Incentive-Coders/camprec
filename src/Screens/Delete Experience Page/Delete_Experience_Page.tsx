import React from 'react';
import { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarStudent from '../Navbar/Navbar_Student';
import { Form, Input } from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';

class delexp extends Component {
  state: { names: string; student_id: string; companys: string };
  constructor(props: any) {
    super(props);

    this.state = {
      names: '',
      student_id: '',
      companys: '',
    };

    this.updateInput = this.updateInput.bind(this);
    this.del_experience = this.del_experience.bind(this);
    this.updatecompanys = this.updatecompanys.bind(this);
  }
  updateInput(event: any) {
    this.setState({ names: event.target.value });
  }
  updatecompanys(event: any) {
    this.setState({ companys: event.target.value });
  }
  del_experience() {
    const arr = JSON.parse(localStorage.getItem('student') || '{}');
    // POST request using fetch with error handling
    const body = {
      names: this.state.names,
      companys: this.state.companys,
      student_id: arr._id,
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/student/delexp', body, {
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
        window.alert('experience deleted Successfuly');
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
            <strong>Delete experience</strong>
          </h3>
          <Form className="addjb margin-top">
            <FormItem>
              <div className="form-group margin-t ">
                <Input
                  type="TEXT"
                  className="form-control"
                  placeholder="title"
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
                  placeholder="Company"
                  onChange={this.updatecompanys}
                  required
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top margin-b"
              onClick={this.del_experience}
              id="button"
              value="delete"
            />
          </Form>
        </section>
      </>
    );
  }
}

export default delexp;
