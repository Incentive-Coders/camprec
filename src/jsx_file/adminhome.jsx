import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_Admin from './navbar_admin';
import ReactPlayer from 'react-player'
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
                            <p className="card-text  fsize"><strong> Year of Establishment:</strong> {props.college}</p>
                            <p className="card-text  fsize"><strong>Discription :</strong>  {props.discription}</p>
                            <ReactPlayer url={props.url} className='vediosize'/>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size left_m">Edit</a></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Adminhome =() => {
    return (
        <>
        <Navbar_Admin />
        <section className="pop image width"> 
        <div>
            <Cards name="IIIT Dharwad" image="https://upload.wikimedia.org/wikipedia/en/c/c1/Indian_Institute_of_Information_Technology%2C_Dharwad.png"/>
        </div> 
        </section>
        </>
    );
};

export default Adminhome;

