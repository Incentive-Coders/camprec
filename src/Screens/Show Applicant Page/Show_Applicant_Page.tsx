import React from 'react';
import { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarShowApplicants from '../Navbar/Navbar_Show_Applicants';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ReactLoading from 'react-loading';
const l = window.location.href;
const a = l.split('=');
console.log(a[1]);
let i;
function Rows(props: any) {
  {
    i = '/viewapplicantcollege/i=' + props.id;
  }
  return (
    <>
      <tr>
        <td>{props.sno + 1}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>
          <a className="btn size2" href={i}>
            View
          </a>
        </td>
      </tr>
    </>
  );
}
function Rows1(props: any) {
  {
    i = '/viewapplicantstudent/i=' + props.id;
  }
  return (
    <>
      <tr>
        <td>{props.sno + 1}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>
          <a className="btn size2" href={i}>
            View
          </a>
        </td>
      </tr>
    </>
  );
}
const Rowlist = ({ Rowlists }: { Rowlists: any }) => {
  return Rowlists?.map((user: any, i: number) => {
    return (
      <>
        <Rows
          key={i}
          sno={i}
          name={Rowlists[i].name}
          email={Rowlists[i].email}
          id={Rowlists[i]._id}
        ></Rows>
      </>
    );
  });
};
const Rowlist1 = ({ Rowlists }: { Rowlists: any }) => {
  return Rowlists?.map((user: any, i: number) => {
    return (
      <>
        <Rows1
          key={i}
          sno={i}
          name={Rowlists[i].name}
          email={Rowlists[i].email}
          id={Rowlists[i]._id}
        ></Rows1>
      </>
    );
  });
};
class showapplicants extends Component<{}, { k: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      k: false,
    };
  }
  showapp() {
    // POST request using fetch with error handling
    const body = {
      job_id: a[1],
    };
    const header = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    axios
      .post('https://camprec.herokuapp.com/api/jobs/slist', body, {
        headers: header,
      })
      .then(
        function (response: any) {
          console.log('*');
          const data = response.data;
          // check for error response
          if (response.status != 200) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
          localStorage.setItem('slist', JSON.stringify(response.data));
        }.bind(this)
      )
      .catch((error) => {
        console.error('There was an error!');
      });
    axios
      .post('https://camprec.herokuapp.com/api/jobs/clist', body, {
        headers: header,
      })
      .then((response: any) => {
        console.log('*');
        const data = response.data;
        // check for error response
        if (response.status != 200) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        localStorage.setItem('clist', JSON.stringify(response.data));
        this.setState({ k: true });
      }, showapplicants.bind)
      .catch((error) => {
        console.error('There was an error!');
      });
  }
  componentDidMount() {
    this.showapp();
  }
  render() {
    return (
      <>
        <NavbarShowApplicants />
        {this.state.k ? (
          <section className="width">
            <div className="mart">
              <h2 className=" margintop">
                <strong className="brand-name leftmargin">Colleges</strong>
              </h2>
              <Table className="tab">
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  <Rowlist
                    Rowlists={JSON.parse(localStorage.getItem('clist') || '{}')}
                  ></Rowlist>
                </tbody>
              </Table>
            </div>
            <div className="mart">
              <h2 className="margintop">
                <strong className="brand-name leftmargin">Student</strong>
              </h2>
              <Table className="tab">
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  <Rowlist1
                    Rowlists={JSON.parse(localStorage.getItem('slist') || '{}')}
                  ></Rowlist1>
                </tbody>
              </Table>
            </div>
          </section>
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

export default showapplicants;
