import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_student from './navbar_student';
function Cards(props) {
    return (
                <>
                   <div className="card2 magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img"></img></div>
                          <div className="cb"><strong><h4 className="card-title marginb centers fsize2">{props.name}</h4></strong>
                            <div className="details"><p className="card-text  fsize"><strong>Email : </strong> {props.email}</p>
                            <p className="card-text  fsize" ><strong>Phone no:</strong> {props.phone}</p>
                            <p className="card-text  fsize"><strong>College :</strong> {props.college}</p>
                            <p className="card-text  fsize"><strong>Discription :</strong>  {props.discription}</p>
                            <p className="card-text  fsize"><strong>Education :</strong>{props.education}</p>
                            <p className="card-text  fsize"><strong>Work experience :</strong> {props.work}</p>
                            <p className="card-text  fsize"><strong>Certification :</strong> {props.certification}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size left_m">Edit</a></div>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Studenthome =() => {
    return (
        <>
        <Navbar_student/>
        <section className="pop image width"> 
        <div>
            <Cards name="Afeef Hasan" work="alkssjfddddddjafnghdafnjvgnrtigtuihgiunvijnriven" certification ="I have gain certificate of data structure and algorithm from coursera" education="currently studying in indian institute of information technology dharwad" image="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
        </div> 
        </section>
        </>
    );
};

export default Studenthome;

