import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import ReactLoading from 'react-loading';
var l= window.location.href
var a=l.split('=')
console.log(a[1])
var arr=JSON.parse(localStorage.getItem("student"));
class studentapply extends Component {
    constructor(props){
    super(props);
    this.state = {
        k : false
    }
    this.body = { 
        
            "job_id" : a[1],
            "student_id" :arr._id,  
    }
    this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
    
}
 
    sapply(){
        console.log(arr._id)
        // POST request using fetch with error handling
        axios.post('https://camprec.herokuapp.com/api/jobs/saccept',this.body,this.header)
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }  
        })
        .catch(error => {
            console.error('There was an error!');
            }
        );
        axios.post('https://camprec.herokuapp.com/api/student/jaccept',this.body,this.header)
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({
                    k : true
                })
        }.bind(this))
        .catch(error => {
            console.error('There was an error!');
            }
        );

        
         
    }

    componentDidMount(){
        this.sapply();
    }

    render() {
        
        return(<>
            {
                this.state.k ?
                (
                    window.alert("The job is applied"),
                    window.location.replace("/studentcompanies"))
                
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

    
    

export default studentapply;
