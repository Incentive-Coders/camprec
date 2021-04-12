import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_company from './navbar_company';
import ReactPlayer from 'react-player'
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
function Cards(props) {
    return (
                <>
                   <div className="magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img"></img></div>
                          <div className="cb"><div className="cb2"><strong><h4 className="card-title  centers fsize2">{props.name}</h4></strong>
                          <p className="card-text centers"><strong>Location : </strong> {props.location}</p></div>
                            <div className="details">
                            <p className="card-text  fsize" ><strong>Email:</strong> {props.email}</p>
                            <p className="card-text  fsize"><strong> Year of Establishment:</strong> {props.year}</p>
                            <p className="card-text  fsize"><strong>Description :</strong>  {props.description}</p>
                            <p className="card-text  fsize"><strong>Webite :</strong>  <a href={props.website}>{props.website}</a></p>
                            <p className="card-text  fsize"> <a href={props.facebook}><FaFacebookF></FaFacebookF></a>  <a href={props.twitter}><FaTwitter></FaTwitter></a> <a href={props.LinkedIn}> <FaLinkedin></FaLinkedin></a> <a href={props.Insta}> <FaInstagram></FaInstagram></a></p>
                            <ReactPlayer url={props.url} />
                            <div className='pop' >
                            <a href="/editcompany" className="btn btn-primary text_size left_m">Edit</a></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Companyhome =() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
    var arr= JSON.parse(localStorage.getItem("company"));
    return (
        <>
        <Navbar_company />
        <section className="pop image width"> 
        <div>
            <Cards name={arr.name} image="https://i.pinimg.com/474x/53/a3/fa/53a3fa9b77f7dc8c321f05b1661cc305.jpg" url={arr.vedio_link} location={arr.location} year={arr.year_of_established} email={arr.email} description={arr.about} website={arr.website} facebook={arr.social_media.facebook} twitter={arr.social_media.twitter} LinkedIn={arr.social_media.linkedin} Insta={arr.social_media.instagram} />
        </div> 
        </section>
        </>
    );
};

export default Companyhome;

