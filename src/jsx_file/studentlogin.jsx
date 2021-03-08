import {React} from 'react';
import "E:/camprec2/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/student_login.png";
import "../css/login.css";
import Navbar from "./Navbar";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
function login_link (){
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Accept':'*/*','Content-Type': 'application/json' },
        body: JSON.stringify(
                                { 
                                email: document.getElementById('email'),
                                password: document.getElementById('password')  
                                }
                            )
    };
    fetch('https://camprec.herokuapp.com/api/student/login', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            render(
                <NavLink to="/studenthome"/>
            )    
        })
        .catch(error => {
            console.error('There was an error!');
        });
}
const Studentlogin =() => {
    return (
        <>
        <Navbar/>
        <div className="pop image width height">
            <img src={web5} className = "image-fluid animated size_img margin-l-lg" alt = "login img"/>
            <div className = "col-md-4 col-10 left_margin">
                        <div className="margin-t-lg">
                            <div className="card-body card_us">
                             <h3 className="card-title card_us"><strong>Student Login</strong></h3>
                                <Form >
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="text" id= 'email' className="form-control" placeholder="Username" required/>
                                    </div>
                                    </FormItem>
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="password" id= 'password' className="form-control" placeholder="password" required/>
                                    </div>
                                    </FormItem>
                                    <Input type= "submit" className="btn margin-t" value="Login" onClick={login_link()}/>
                                </Form>
                    </div>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Studentlogin;