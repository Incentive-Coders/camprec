import React from 'react';
import web from "../images/about.png";
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_student from './navbar_student';
import {Form, Input} from 'antd';
import Carousel from "react-bootstrap/Carousel";
function Carousl() {
    return (
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://courseseeker.edu.au/assets/images/course-seeker_og_image.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://courseseeker.edu.au/assets/images/course-seeker_og_image.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://courseseeker.edu.au/assets/images/course-seeker_og_image.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )}
function Cards(props) {
    return (
                <>
                   <div className="card magin-top" >
                        <div className="card-body profile_width">
                            <img src={props.image} className="profile_img"></img>
                            <strong><h4 className="card-title  centers">{props.name}</h4></strong>
                            <p className="card-text centers"><strong>Email : </strong> <br/>{props.email}</p>
                            <p className="card-text centers" ><strong>Phone no:</strong> <br/>{props.phone}</p>
                            <p className="card-text centers"><strong>College :</strong> <br/>{props.college}</p>
                            <p className="card-text centers"><strong>Discription :</strong> <br/> {props.discription}</p>
                            <p className="card-text centers"><strong>Education :</strong> <br/>{props.education}</p>
                            <p className="card-text centers"><strong>Work experience :</strong><br/> {props.work}</p>
                            <p className="card-text centers"><strong>Certification :</strong> <br/>{props.certification}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size left_m">Edit</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Studenthome =() => {
    return (
        <>
        <Navbar_student />
        <section className="pop image width">
        <div>
            <Carousl/>
        </div>   
        <div>
            <Cards name="Afeef Hasan" work="alkssjfddddddjafnghdafnjvgnrtigtuihgiunvijnriven" certification ="I have gain certificate of data structure and algorithm from coursera" education="currently studying in indian institute of information technology dharwad" image="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
        </div> 
        </section>
        </>
    );
};

export default Studenthome;

