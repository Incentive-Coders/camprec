import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import { NavLink } from "react-router-dom";
import Navbar_company from './navbar_company';
import web from "../images/add.png";
import axios from 'axios';
function Cards(props) {
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size margin_left">Show Aplicants</a>
                            <a href="#" className="btn btn-primary  text_size margin_left">Edit</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Cardlist = ({ Joblist }) => {
    console.log(Joblist);
    return (
        <div className="gridwraper">
        {
            Joblist.map((user, i) => {
            return (
                <Cards
                key={i}
                title={Joblist[i].job_title}
                content={Joblist[i].job_description}
                location = {Joblist[i].location}
                />
            );
            })
        }
        </div>
    );
    }
class Companyjobs extends Component {

    constructor(props){
    super(props);
    
    this.state = {
        company_id : '',
    }
    this.companyjoblist = this.companyjoblist.bind(this);
    }

    companyjoblist (){
        var job = [];
        // POST request using fetch with error handling
        const body =  
            { 
                "company_id" : '6036269f37ec673ed0415b17', 
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/jobs/list',body,{header})
            .then(function(response) {
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(response.data)
                job = response.data;
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            return job;
            
    }; 


    render() {
        return (
            <>
            <Navbar_company />
            <section className="image width heights">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Jobs</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                            <Cardlist Joblist={this.companyjoblist()}/>
                            <div className="card3 widths" >
                            <div className="card-body">
                                <NavLink to='/addjobs'><img src={web} className="addheight"/></NavLink> 
                            </div>
                        </div>
                        </div>
            </section>
            </>
        );
    };
}

export default Companyjobs ;