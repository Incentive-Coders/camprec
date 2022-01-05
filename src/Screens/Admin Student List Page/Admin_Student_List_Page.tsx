import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import NavbarAdmin from '../Navbar/Navbar_Admin';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ReactLoading from 'react-loading';
let i: string;

interface rowsProps {
  id: string;
  sno: number;
  name: string;
  email: string;
}
function Rows(props: rowsProps) {
  {
    i = '/viewadminstd/i=' + props.id;
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
const arr = JSON.parse(localStorage.getItem('college') || '{}');
class Adminstudent extends Component {
  state: {
    k: boolean;
  };
  constructor(props: any) {
    super(props);
    this.state = {
      k: false,
    };
  }

  studentlist() {
    const body = {
      college_id: arr._id,
    };
    const header = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
    const student: never[] = [];
    // POST request using fetch with error handling
    axios
      .post('http://localhost:4000/api/college/studentlist', body, {
        headers: { header },
      })
      .then(
        function (response: any) {
          // check for error response
          if (response.status != 200) {
            // get error message from body or default to response status
            const error =
              (response.data && response.data.message) || response.status;
            return Promise.reject(error);
          }
          console.log(response.data.length);
          localStorage.setItem('studentlist', JSON.stringify(response.data));
          this.setState({
            k: true,
          });
        }.bind(this)
      )
      .catch((error) => {
        console.log(error);
        window.alert('something went wrong');
      });
    if (student) return student;
  }

  componentDidMount() {
    this.studentlist();
  }
  render() {
    return (
      <>
        <NavbarAdmin />
        {this.state.k ? (
          <section className=" width">
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
                  Rowlists={JSON.parse(
                    localStorage.getItem('studentlist') || '{}'
                  )}
                ></Rowlist>
              </tbody>
            </Table>
            <div>
              <a className="btn ma" href="./addstudent">
                Add student
              </a>
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

export default Adminstudent;
