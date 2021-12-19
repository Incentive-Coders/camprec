import React, { Component } from 'react';
import '../../index.css';
import '../../css/home.css';
import '../../css/login.css';
import ReactPlayer from 'react-player';
import axios from 'axios';
import ReactLoading from 'react-loading';
import NavbarViewCollege from '../Navbar/Navbar_View_College';
const l = window.location.href;
const a = l.split('=');
console.log(a[1]);
localStorage.setItem('college_id', a[1]);
function Cards(props: any) {
  return (
    <>
      <div className="card2 magin-top">
        <div className="card-body profile_width pop">
          <div>
            <img src={props.image} className="profile_img2 marginl size"></img>
          </div>
          <div className="cb">
            <div className="cb2">
              <strong>
                <h4 className="card-title  centers fsize2">{props.name}</h4>
              </strong>
              <p className="card-text centers">
                <strong>Location : </strong> {props.location}
              </p>
            </div>
            <div className="details">
              <p className="card-text  fsize">
                <strong>Email:</strong> {props.email}
              </p>
              <p className="card-text  fsize">
                <strong> Year of Establishment:</strong> {props.year}
              </p>
              <p className="card-text  fsize">
                <strong>Description :</strong> {props.description}
              </p>
              <ReactPlayer url={props.url} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
class Viewcollege extends Component<{}, { k: any }> {
  body: { college_id: string };
  header: {
    'Content-Type': string;
    'Accept-Encoding': string;
    Connection: string;
  };
  constructor(props: any) {
    super(props);
    this.body = {
      college_id: a[1],
    };
    this.state = {
      k: false,
    };
    this.header = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    };
  }

  collegedata() {
    // POST request using fetch with error handling
    axios
      .post(
        'https://camprec.herokuapp.com/api/college/data',
        this.body,
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
          localStorage.setItem('college', JSON.stringify(response.data));
          this.setState({ k: true });
        }.bind(this)
      )
      .catch((error) => {
        console.log(error);
        window.alert('something went wrong');
      });
  }
  componentDidMount() {
    this.collegedata();
  }

  render() {
    const arr = JSON.parse(localStorage.getItem('college') || '{}');
    return (
      <>
        <NavbarViewCollege />
        {this.state.k ? (
          <section className="pop image width">
            <div>
              <Cards
                name={arr.name}
                location={arr.location}
                email={arr.email}
                year={arr.year_of_established}
                url={arr.vedio_link}
                description={arr.about}
                image="https://upload.wikimedia.org/wikipedia/en/c/c1/Indian_Institute_of_Information_Technology%2C_Dharwad.png"
              />
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

export default Viewcollege;
