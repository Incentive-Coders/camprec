import React from 'react';
import { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import NavbarStudent from '../Navbar/Navbar_Student';
import axios from 'axios';
import ReactLoading from 'react-loading';
function Cards(props: any) {
  const i = '/viewstudentcompany/i=' + props.id;
  return (
    <>
      <div className="card widths ">
        <div className="card-body">
          <strong>
            <h4 className="card-title  centers hfixed2">{props.title}</h4>
          </strong>
          <strong>
            <h6 className="card-title  centers hfixed2">{props.location}</h6>
          </strong>
          <p className="card-text hfixed">{props.content}</p>
          <div className="pop">
            <a href={i} className="btn btn-primary  text_size left_m2 m_t">
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Cardlist({ Companylist }: { Companylist: any }) {
  return (
    <div className="gridwraper">
      {Companylist?.map((user: any, i: number) => {
        return (
          <>
            <Cards
              key={i}
              title={Companylist[i].name}
              content={Companylist[i].about}
              location={Companylist[i].location}
              id={Companylist[i]._id}
            />
          </>
        );
      })}
    </div>
  );
}
const j = 1;

class StudentCompany extends Component<{}, { j: any; k: any; p: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      j: 1,
      k: false,
      p: 0,
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.companylist = this.companylist.bind(this);
  }

  companylist() {
    const arr1 = JSON.parse(localStorage.getItem('student') || '{}');
    const body1 = {
      student_id: arr1._id,
    };
    // POST request using fetch with error handling
    axios
      .post(
        'https://camprec.herokuapp.com/api/student/data',
        body1,
        this.header
      )
      .then(
        function (response: any) {
          // check for error response
          if (response.status != 200) {
            // get error message from body or default to response status
            const error =
              (response.data && response.data.message) || response.status;
            return Promise.reject(error);
          }
          localStorage.clear();
          localStorage.setItem('student', JSON.stringify(response.data));
        }.bind(this)
      )
      .catch((error) => {
        console.log(error);
        window.alert('something went wrong');
      });
    const company: never[] = [];
    const k =
      'https://camprec.herokuapp.com/api/company/list/' +
      this.state.j.toString();
    // POST request using fetch with error handling
    axios
      .get(k)
      .then(
        function (response: any) {
          // check for error response
          if (response.status != 200) {
            // get error message from body or default to response status
            const error =
              (response.data && response.data.message) || response.status;
            return Promise.reject(error);
          }
          localStorage.setItem('company', JSON.stringify(response.data));
          this.setState({ k: true });
          this.setState({ p: this.state.j });
        }.bind(this)
      )
      .catch((error) => {
        console.log(error);
        window.alert('something went wrong');
      });
    if (company) return company;
  }
  header(arg0: string, body1: { student_id: any }, header: any) {
    throw new Error('Method not implemented.');
  }
  back() {
    if (this.state.j === 1) {
      return null;
    } else {
      this.setState({ j: this.state.j - 1, k: false });
    }
  }
  next() {
    this.setState({ j: this.state.j + 1, k: false });
  }
  componentDidMount() {
    if (this.state.j === 1) {
      this.companylist();
    }
  }
  componentDidUpdate() {
    if (this.state.j != this.state.p) {
      this.companylist();
    }
  }
  render() {
    return (
      <>
        <NavbarStudent />
        {this.state.k ? (
          <section className="image width">
            <div className="get_started">
              <h2 className="text_center margintop">
                <strong className="brand-name leftmargin">Companies</strong>
              </h2>
            </div>
            <div className="gridwraper">
              <Cardlist
                Companylist={JSON.parse(
                  localStorage.getItem('company') || '{}'
                )}
              />
            </div>
            <div className="m-l3">
              <button className="btn text_size m_t " onClick={this.back}>
                &laquo; Previous
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="btn text_size m_t" onClick={this.next}>
                Next &raquo;
              </button>
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

export default StudentCompany;
