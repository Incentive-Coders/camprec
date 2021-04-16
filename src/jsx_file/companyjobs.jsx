import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import { NavLink } from "react-router-dom";
import Navbar_company from './navbar_company';
import ReactLoading from 'react-loading';
import axios from 'axios';
import {FaRegTrashAlt,FaRegPlusSquare} from "react-icons/fa";
var k,i,n;

function Cards(props) {
    k="/editjobs/i="+props.id;
    i="/showapplicants/i="+props.id;
    n="/deljobs/i="+props.id;
    return (
                
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <a href={n} className="text_size margin_left"><FaRegTrashAlt></FaRegTrashAlt></a>
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href={k} className="btn btn-primary text_size left_m2 m_t">Edit</a>
                            <a href={i} className="btn btn-primary text_size left_m2 m_t">Show Aplicants</a>
                            
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
                id={Joblist[i]._id}
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
                                <NavLink to='/addjobs'><FaRegPlusSquare className="addheight"/></NavLink> 
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
    this.state={
        k : false
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
                this.setState({k: true});
            }.bind(this))
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            if(job)
            return job;
            
    }; 
    componentDidMount(){
        this.companyjoblist();
    }
    render() {
        return (
            <>
            <Navbar_company />
            { this.state.k ? 
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
            :
            <section className="pop image width"> 
            <div className="load">          
            <ReactLoading type="spinningBubbles" color="white" height="120px" width="120px" />
            </div>     
            </section>
            }
            </>
        );
    };
}

export default Companyjobs ;