import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_student from './navbar_student';
import {Form, Input} from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';

class addcer extends Component {

    constructor(props){
    super(props);
    
    this.state = {
        courses : '',
        valid_till: '',
        student_id:'',
        link:'',
        institutes:'',
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatevalid_till = this.updatevalid_till.bind(this);
    this.add_experience = this.add_experience.bind(this);
    this.updatelink = this.updatelink.bind(this)
    this.updateinstitutes = this.updateinstitutes.bind(this)
}
    updateInput(event){
    this.setState({courses : event.target.value})
    }
    updateinstitutes(event){
        this.setState({institutes : event.target.value})
        }
    updatelink(event){
            this.setState({link : event.target.value})
        }
    updatevalid_till(event){
        this.setState({valid_till : event.target.value})
    }
    
    

    add_experience (){
        var arr = JSON.parse(localStorage.getItem("student"));
        console.log(this)
        console.log(this.state.courses);
        console.log(this.state.valid_till);
        console.log(this.state.description);
        // POST request using fetch with error handling
        const body =  
            { 
                "courses" : this.state.courses,
                "valid_till" : this.state.valid_till, 
                "institutes": this.state.institutes,
                "links": this.state.link,
                "student_id" : arr._id,
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/student/addcer',body,{header})
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                window.alert("experience Added Successfuly");
                window.location.replace('/studenthome');
        })
         .catch(error => {
                console.error('There was an error!');
                window.alert("There was some error unable to create experience");
                
            });
            
    };
    
    render(){
        return (
            <>
            <Navbar_student/>
            <section className="image width height">
                                 <h3 className="card-title card_us"><strong>Add New Certificate</strong></h3>
                                    <Form className="addjb margin-top" >
                                        <FormItem >
                                        <div className="form-group margin-t ">
                                            <Input type="TEXT" className="form-control" placeholder="Course" onChange={this.updateInput} required />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="valid_till" onChange={this.updatevalid_till} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="Institute Offering" onChange={this.updateinstitutes} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="Certificate Link" onChange={this.updatelink} />
                                        </div>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-top margin-b" onClick={this.add_experience} id='button'  value="Add"/>
                                    </Form>
            </section>
            </>
        );
    };
};


export default addcer;