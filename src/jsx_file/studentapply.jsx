import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
var l= window.location.href
var a=l.split('=')
console.log(a[1])
var arr=JSON.parse(localStorage.getItem("student"));
class studentapply extends Component {
    constructor(props){
    super(props);
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
                window.location.replace('/studentjobs');   
        })
        // .catch(error => {
        //     console.error('There was an error!');
        //     }
        // );
        
         
    }
    


    render() {
        this.sapply();
        return(
            null
        );
    };
}

    
    

export default studentapply;
