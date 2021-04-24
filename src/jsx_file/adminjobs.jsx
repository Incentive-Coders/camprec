import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_viewcompany from './navbar_viewcompany2';
import axios from 'axios';
import ReactLoading from 'react-loading';
let prem = JSON.parse(localStorage.getItem("college"));
var k;
function Cards(props) {
    {
        k="/adminapply/i="+props.job_id;
    }
    return (
                
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            {
                            (prem.job).includes(props.job_id)?
                            <a href='#' className="btn btn-primary text_size left_m2 dis">Applied</a>
                            :
                            <a href={k} className="btn btn-primary text_size left_m2">Apply</a>
                            }
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
            Joblist?.map((user, i) => {
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
        </div>
    );
    }
var arr=localStorage.getItem("company_id");
class adminjobs extends Component {
    constructor(props){
    super(props);
    this.body = { 
        "company_id" : arr,
    }
    this.state = {
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
                this.setState({
                    k : true
                })
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
            <Navbar_viewcompany/>
            { this.state.k ? 
            <section className="image width heights">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Jobs</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                        { JSON.parse(localStorage.getItem('jobs')).length?
                            <Cardlist Joblist={JSON.parse(localStorage.getItem('jobs'))}/>
                            :
                            <div className="card-body">
                            <strong><h3 className="card-title  centers">No jobs available</h3></strong>
                            </div>
                        }
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

export default adminjobs ;