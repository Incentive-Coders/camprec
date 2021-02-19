import React from 'react';
import "E:/camprec2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/login.jpg";
import "../css/login.css";

const studentlogin =() => {
    return (
        <>
        <div >
        <div className="login-container text-c animated flipInX card-us">
                <div>
                <img src={web5} className = "student card_us" alt = "login img"/>
                </div>
                    <h3 className="text-purple">Student Sign-in </h3>
                    <p className="text-purple">Sign In</p>
                <div className="container-content">
                    <form className="margin-t">
                        <div className="form-group margin-t">
                            <input type="text" className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group margin-t">
                            <input type="password" className="form-control" placeholder="*****" required="" />
                        </div>
                        <div className=" margin-t">
                        <button type="submit" className="loginbtn">Sign In</button>
                        </div>
                    </form>
               </div>         
               </div> 
               </div>
        </>
    );
};

export default studentlogin;