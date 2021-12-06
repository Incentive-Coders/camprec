import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_Admin from '../navbar_admin';
import ReactPlayer from 'react-player'
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
function Cards(props) {
    return (
                <>
                   <div className="card2 magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img2 marginl"></img></div>
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
                            <a href="/editcollege" className="btn btn-primary text_size left_m">Edit</a></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Adminhome =() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
    var arr= JSON.parse(localStorage.getItem("college"));
    return (
        <>
        <Navbar_Admin />
        <section className="pop image width"> 
        <div>
            <Cards name={arr.name} location={arr.location} email={arr.email} year={arr.year_of_established} url={arr.vedio_link} description={arr.about } image="https://upload.wikimedia.org/wikipedia/en/c/c1/Indian_Institute_of_Information_Technology%2C_Dharwad.png" website={arr.website} facebook={arr.social_media.facebook} twitter={arr.social_media.twitter} LinkedIn={arr.social_media.linkedin} Insta={arr.social_media.instagram} />
        </div> 
        </section>
        </>
    );
};

export default Adminhome;

