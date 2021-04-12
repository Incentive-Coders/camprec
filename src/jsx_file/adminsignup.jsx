import {React, Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import"../css/home.css";
import web5 from "../images/admin_login.png";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
import Navbar from "./Navbar";
import axios from 'axios';

class AdminSignup extends Component {

    constructor(props){
    super(props);
    
    this.state = {
      email : '',
      password : '',
      name : '',
      about : '',
      college_type : '',
      year_of_established : '',
      location : '',
      website : '',
      twitter : '',
      facebook : '',
      linkedin : '',
      instagram : '',
      vedio_link : ''
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

    updateName(event){
        this.setState({name : event.target.value})
    }

    updateCollegeType(event){
        this.setState({college_type : event.target.value})
    }

    updateAbout(event){
        this.setState({about : event.target.value})
    }

    updateYear(event){
        this.setState({year_of_established : event.target.value})
    }

    updateLocation(event){
        this.setState({location : event.target.value})
    }

    updateWebsite(event){
        this.setState({ website : event.target.value})
    }

    updateTwitter(event){
        this.setState({twitter : event.target.value})
    }
    
    updateInstagram(event){
        this.setState({instagram : event.target.value})
    }

    
    updateFacebook(event){
        this.setState({facebook : event.target.value})
    }
    
    updateLinkedin(event){
        this.setState({linkedin : event.target.value})
    }
    
    updateVediolink(event){
        this.setState({vedio_link : event.target.value})
    }

    

    login_link (){
        console.log(this.state.email);
        console.log(this.state.password);
        // POST request using fetch with error handling
        const body =  
            { 
                "email" : this.state.email,
                "password" : this.state.password,
                "name" : this.state.name,
                "college_type" : this.state.college_type,
                "year_of_established" : this.state.year_of_established,
                "about" : this.state.about,
                "website" : this.state.website,
                "socialmedia" : {
                    "linkedin" : this.state.linkedin,
                    "instagram" : this.state.instagram,
                    "facebook" : this.state.facebook,
                    "twitter" : this.state.twitter,
                },
                "vedio_link" : this.state.vedio_link,
                "approve" : false
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/college/signup',body,{header})
            .then(function(response) {
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem("college",JSON.stringify(response.data))
                window.location.replace('/adminhome');
                 
        })
         .catch(error => {
                console.error('There was an error!');
                if(this.state.email  && this.state.password){
                    window.alert("Incorect Id and Password");
                }
                
            });
            
    };
    
    render(){
    return (
            <>
            <section className="image width ">
            <Navbar/>
                                 <h3 className="card-title card_us"><strong>College Signup</strong></h3>
                                    <Form className="editjb margin-top center m-l" >
                                        <FormItem >
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className=" boderb form-control "  placeholder="college name" onChange={this.updateInput} required />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="college location" onChange={this.updatelocation} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="college Website"  onChange={this.updatewebsite} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className=" boderb form-control"  placeholder="college facebook-link"  onChange={this.updatefacebook} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="college LinkedIn-link"  onChange={this.updatelinkedin} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="college instagram-link"  onChange={this.updateinstagram} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="college twitter-link"  onChange={this.updatetwitter} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control"  placeholder="Disc Vedio Link"  onChange={this.updatevedio_link} required/>
                                        </div>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control size"  placeholder="college Description"  onChange={this.updatecollege_description} required/>
                                        </div>
                                        </FormItem>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-top m-l2 center" onClick={this.login_link} id='button'  value="Submit"/>
                                    </Form>
            </section>
            </>
        );
    }
} 

export default AdminSignup;