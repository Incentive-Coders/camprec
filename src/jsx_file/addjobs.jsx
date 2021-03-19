import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_company from './navbar_company';
import axios from 'axios';
class addjobs extends Component {

    constructor(props){
    super(props);
    
    this.state = {
        job_title : '',
        job_location: '',
        job_description:'',
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatejob_location = this.updatejob_location.bind(this);
    this.updatejob_description = this.updatejob_description.bind(this);
    this.add_job = this.add_job.bind(this);
    }
    
    
    updateInput(event){
    this.setState({job_title : event.target.value})
    }

    updatejob_location(event){
        this.setState({job_location : event.target.value})
    }
    updatejob_description(event){
        this.setState({job_description : event.target.value})
    }
    

    add_job (){
        console.log(this.state.job_title);
        console.log(this.state.job_location);
        console.log(this.state.job_description);
        // POST request using fetch with error handling
        const body =  
            { 
                "job_title" : this.state.job_title,
                "location" : this.state.job_location,  
                "job_description" : this.state.job_description,  
                "student":[],
                "college":[],
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/jobs/create',body,{header})
            .then(function(response) {
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                window.alert("Job created Successfuly");
                window.location.replace('/companyjob');
                 
        })
         .catch(error => {
                console.error('There was an error!');
                if(this.state.job_title  && this.state.job_description ){
                    window.alert("There was some error unable to create Job");
                }
                
            });
            
    };
    
    render(){
        return (
            <>
            <Navbar_company/>
            <section className="image width height">
                                 <h3 className="card-title card_us"><strong>Add New job</strong></h3>
                                    <form className="addjb margin-top" >
                                        <formItem >
                                        <div className="form-group margin-t">
                                            <input type="TEXT" className="form-control" placeholder="Job title" onChange={this.updateInput} required />
                                        </div>
                                        </formItem>
                                        <formItem>
                                        <div className="form-group margin-t">
                                            <input type="TEXT" className="form-control" placeholder="Job location" onChange={this.updatejob_location} />
                                        </div>
                                        </formItem>
                                        <formItem>
                                        <div className="form-group margin-t">
                                            <input type="TEXT" className="form-control size" placeholder="Job Description"  onChange={this.updatejob_description} required/>
                                        </div>
                                        </formItem>
                                        <input type= "submit" className="btn margin-top margin-b" onClick={this.add_job} id='button'  value="Submit"/>
                                    </form>
            </section>
            </>
        );
    };
} 

export default addjobs;