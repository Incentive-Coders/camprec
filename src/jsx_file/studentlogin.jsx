import {React, Component} from 'react';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/student_login.png";
import "../css/login.css";
import Navbar from "./Navbar";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import axios from 'axios';
class App extends Component {

    constructor(props){
    super(props);
    
    this.state = {
      email : '',
      password : ''
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login_link = this.login_link.bind(this);
    }
    
    
    updateInput(event){
    this.setState({email : event.target.value})
    }

    updatePassword(event){
        this.setState({password : event.target.value})
    }

    login_link (){
        console.log(this.state.email);
        console.log(this.state.password);
        // POST request using fetch with error handling
        const body =  
            { 
                "email" : this.state.email,
                "password" : this.state.password  
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/student/login',body,{header})
            .then(async response => {
                const data = await response.json();
                console.log(data);
                console.log(response.status);
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({ postId: data.id })
                render(
                    <NavLink to="/studenthome"/>
                )    
            })
            .catch(error => {
                console.error('There was an error!');
            });

            
    };
    
    render(){
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
                                            <Input type="text" id= 'email' className="form-control" onChange={this.updateInput} placeholder="Username" required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="password" id= 'password' className="form-control" onChange={this.updatePassword} placeholder="password" required/>
                                        </div>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-t" value="Login"  onClick={this.login_link}></input>
                                    </Form>
                        </div>
                    </div>
                </div>
            </div> 
            </>
        );
    }
} 

export default App;