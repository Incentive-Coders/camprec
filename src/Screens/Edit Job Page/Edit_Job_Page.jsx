import { React, Component } from "react";
import "../index.css";
import "../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_company from "./Navbar_Company";
import { Form, Input } from "antd";
import axios from "axios";
import FormItem from "antd/lib/form/FormItem";
var l = window.location.href;
var a = l.split("=");
console.log(a[1]);
class editjobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_title: "",
      location: "",
      job_description: "",
      job_id: "",
    };

    this.updateInput = this.updateInput.bind(this);
    this.updatelocation = this.updatelocation.bind(this);
    this.updatejob_description = this.updatejob_description.bind(this);
    this.edit_job = this.edit_job.bind(this);
  }

  updateInput(event) {
    this.setState({ job_title: event.target.value });
  }

  updatelocation(event) {
    this.setState({ location: event.target.value });
  }
  updatejob_description(event) {
    this.setState({ job_description: event.target.value });
  }

  edit_job() {
    var arr = JSON.parse(localStorage.getItem("job"));
    console.log(this);
    console.log(this.state.job_title);
    console.log(this.state.location);
    console.log(this.state.job_description);
    // POST request using fetch with error handling
    const body = {
      job_title: this.state.job_title,
      location: this.state.location,
      job_description: this.state.job_description,
      job_id: a[1],
    };
    const header = {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    };
    axios
      .post("https://camprec.herokuapp.com/api/jobs/edit", body, { header })
      .then(function (response) {
        console.log("*");
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        window.alert("Job edited Successfuly");
        window.location.replace("/companyjobs");
      })
      .catch((error) => {
        console.error("There was an error!");
        if (this.state.job_title && this.state.job_description) {
          window.alert("There was some error unable to editing Job");
        }
      });
  }

  render() {
    return (
      <>
        <Navbar_company />
        <section className="image width height">
          <h3 className="card-title card_us">
            <strong>Edit job</strong>
          </h3>
          <Form className="editjb margin-top center m-l">
            <FormItem>
              <div className="form-group margin-t ">
                <Input
                  type="TEXT"
                  className="form-control boderb"
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
                  className="form-control boderb"
                  placeholder="Job location"
                  onChange={this.updatelocation}
                />
              </div>
            </FormItem>
            <FormItem>
              <div className="form-group margin-t">
                <Input
                  type="TEXT"
                  className="form-control size boderb"
                  placeholder="Job Description"
                  onChange={this.updatejob_description}
                  required
                />
              </div>
            </FormItem>
            <input
              type="submit"
              className="btn margin-top m-l2 margin-b"
              onClick={this.edit_job}
              id="button"
              value="Submit"
            />
          </Form>
        </section>
      </>
    );
  }
}

export default editjobs;
