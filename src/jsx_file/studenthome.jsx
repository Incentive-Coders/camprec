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
                            <div className="details"><p className=" card-body card-text  fsize"><strong>Email : <br/> </strong> {props.email}</p>
                            <p className="card-body card-text boder fsize" ><strong>Phone no:</strong> <br/>{props.phone}</p>
                            <p className="card-body card-text  fsize"><strong>College :</strong> <br/>{props.college}</p>
                            <p className="card-body card-text  fsize"><strong>Description :</strong> <br/> {props.description}</p>
                            <p className="card-body card-text  fsize"><strong>Education :</strong><br/>{props.education}</p>
                            <p className="card-body card-text  fsize"><strong>Work experience :</strong> <br/>{props.work}</p>
                            <p className="card-body card-text  fsize"><strong>Certification :</strong><br/> {props.certification}</p>
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
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
    var arr = JSON.parse(localStorage.getItem("student"));
    console.log(arr)
    return (
        <>
        <Navbar_student/>
        <section className="pop image width"> 
        <div>
            <Cards name={arr.name} work={arr.experience} email={arr.email} certification ={arr.certification} phone={arr.contactno} education={arr.education} description={arr.about} image="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" college={arr.college}/>
        </div> 
        </section>
        </>
    );
};

export default Studenthome;

