import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_company from './navbar_company';
import ReactPlayer from 'react-player'
function Cards(props) {
    return (
                <>
                   <div className="card2 magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img marginl"></img></div>
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
const Companyhome =() => {
    return (
        <>
        <Navbar_company />
        <section className="pop image width"> 
        <div>
            <Cards name="Amazon" image="https://i.pinimg.com/474x/53/a3/fa/53a3fa9b77f7dc8c321f05b1661cc305.jpg"/>
        </div> 
        </section>
        </>
    );
};

export default Companyhome;

