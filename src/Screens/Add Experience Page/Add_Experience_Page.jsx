import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_student from '../navbar_student';
import {Form, Input} from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';

class addexp extends Component {

    constructor(props){
    super(props);
    
    this.state = {
        names : '',
        duration: '',
        description:'',
        student_id:'',
        link:'',
        companys:'',
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updateduration = this.updateduration.bind(this);
    this.updatedescription = this.updatedescription.bind(this);
    this.add_experience = this.add_experience.bind(this);
    this.updatelink = this.updatelink.bind(this)
    this.updatecompanys = this.updatecompanys.bind(this)
}
    updateInput(event){
    this.setState({names : event.target.value})
    }
    updatecompanys(event){
        this.setState({companys : event.target.value})
        }
    updatelink(event){
            this.setState({link : event.target.value})
        }
    updateduration(event){
        this.setState({duration : event.target.value})
    }
    updatedescription(event){
        this.setState({description : event.target.value})
    }
    

    add_experience (){
        var arr = JSON.parse(localStorage.getItem("student"));
        console.log(this)
        console.log(this.state.names);
        console.log(this.state.duration);
        console.log(this.state.description);
        // POST request using fetch with error handling
        const body =  
            { 
                "names" : this.state.names,
                "duration" : this.state.duration,  
                "description" : this.state.description,
                "companys": this.state.companys,
                "link": this.state.link,
                "student_id" : arr._id,
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/student/addexp',body,{header})
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
                 
        }).catch(error => {
                console.error('There was an error!');
                window.alert("There was some error unable to create experience");
                
            });
            
    };
    
    render(){
        return (
            <>
            <Navbar_student/>
            <section className="image width">
                                 <h3 className="card-title card_us"><strong>Add New experience</strong></h3>
                                    <Form className="addjb margin-top" >
                                        <FormItem >
                                        <div className="form-group margin-t ">
                                            <Input type="TEXT" className="form-control" placeholder="title" onChange={this.updateInput} required />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="duration" onChange={this.updateduration} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="Company" onChange={this.updatecompanys} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="Certificate Link" onChange={this.updatelink} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="experience Description"  onChange={this.updatedescription} required/>
                                        </div>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-top margin-b" onClick={this.add_experience} id='button'  value="Add"/>
                                    </Form>
            </section>
            </>
        );
    };
};


export default addexp;