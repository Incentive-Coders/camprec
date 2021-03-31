import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import { NavLink } from "react-router-dom";
import Navbar_company from './navbar_company';
import web from "../images/add.png";
import axios from 'axios';
var k;
sessionStorage.clear();
function Cards(props) {
    {
        k="/editjobs/i="+props.job_id
    }
    return (
                
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary text_size margin_left">Show Aplicants</a>
                           <a href={k} className="btn btn-primary  text_size margin_left" > Edit </a>
                            </div>
                            
                        </div>
                    </div>
                    </>
                    
    )
                    }
const Cardlist = ({ Joblist }) => {
    return (
        <div className="gridwraper">
        {
            Joblist.map((user, i) => {
            return (<>
                <Cards
                key={i}
                job_id={Joblist[i]._id}
                title={Joblist[i].job_title}
                content={Joblist[i].job_description}
                location = {Joblist[i].location}
                />
                </>
            );

            })
        }
         <div className="card3 widths" >
                            <div className="card-body">
                                <NavLink to='/addjobs'><img src={web} className="addheight"/></NavLink> 
                            </div>
                        </div>
        </div>
    );
    }
var arr= JSON.parse(localStorage.getItem("company"));
class Companyjobs extends Component {
    constructor(props){
    super(props);
    this.body = { 
        "company_id" : arr._id,
    }
    this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
    }
    

    companyjoblist (){
        var job = [];
        // POST request using fetch with error handling
        axios.post('https://camprec.herokuapp.com/api/jobs/list',this.body,this.header)
            .then(function(response) {
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem('jobs',JSON.stringify(response.data))
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            if(job)
            return job;
            
    }; 


    render() {
        this.companyjoblist()
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
                            <Cardlist Joblist={JSON.parse(localStorage.getItem('jobs'))}/>
                        </div>
            </section>
            </>
        );
    };
}

export default Companyjobs ;