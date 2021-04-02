import React ,{Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import ReactPlayer from 'react-player'
import axios from 'axios';
import Navbar_collegestudentview from './navbar_collegestudentview';
var l= window.location.href
var a=l.split('=')
console.log(a[1])
function Cards(props) {
    return (
                <>
                
                <div className="card2 magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img"></img></div>
                          <div className="cb"><strong><h4 className="card-title marginb centers fsize2">{props.name}</h4></strong>
                            <div className="details"><p className=" card-body card-text  fsize"><strong>Email : <br/> </strong> {props.email}</p>
                            <p className="card-body card-text boder fsize" ><strong>Phone no:</strong> <br/>{props.phone}</p>
                            <p className="card-body card-text  fsize"><strong>College :</strong> <br/>{props.college}</p>
                            <p className="card-body card-text  fsize"><strong>Description :</strong> <br/> {props.description}</p>
                            <p className="card-body card-text  fsize"><strong>Education :</strong><br/>{props.education}</p>
                            <p className="card-body card-text  fsize"><strong>Work experience :</strong> <br/>{props.work}</p>
                            <p className="card-body card-text  fsize"><strong>Certification :</strong><br/> {props.certification}</p>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
class Viewstudent extends Component {
    constructor(props){
    super(props);
    this.body = { 
        "student_id" : a[1],
    }
    this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
    }
    

    collegedata (){
        // POST request using fetch with error handling
        axios.post('https://camprec.herokuapp.com/api/student/data',this.body,this.header)
            .then(function(response) {
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem('student',JSON.stringify(response.data))
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            
    }; 


    render() {
        this.collegedata()
        var arr= JSON.parse(localStorage.getItem("student"));
        return (
            <>
           <Navbar_collegestudentview />
            <section className="pop image width"> 
            <div>
            <Cards name={arr.name} work={arr.experience} email={arr.email} certification ={arr.certification} phone={arr.contactno} education={arr.education} description={arr.about} image="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" college={arr.college}/>
            </div>

            </section>
            </>
        );
}  
};

export default Viewstudent;