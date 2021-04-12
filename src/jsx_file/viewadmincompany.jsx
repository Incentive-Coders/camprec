import React ,{Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_viewcompany from './navbar_viewcompany';
import ReactPlayer from 'react-player'
import axios from 'axios';
var l= window.location.href
var a=l.split('=')
console.log(a[1])
function Cards(props) {
    return (
                <>
                <Navbar_viewcompany></Navbar_viewcompany>
                   <div className="magin-top" >
                        <div className="card-body profile_width pop">
                          <div><img src={props.image} className="profile_img2 size"></img></div>
                          <div className="cb"><div className="cb2"><strong><h4 className="card-title  centers fsize2">{props.name}</h4></strong>
                          <p className="card-text centers"><strong>Location : </strong> {props.location}</p></div>
                            <div className="details">
                            <p className="card-text  fsize" ><strong>Email:</strong> {props.email}</p>
                            <p className="card-text  fsize"><strong> Year of Establishment:</strong> {props.year}</p>
                            <p className="card-text  fsize"><strong>Description :</strong>  {props.description}</p>
                            <ReactPlayer url={props.url} />
                            </div>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
class Viewcompany extends Component {
    constructor(props){
    super(props);
    this.body = { 
        "company_id" : a[1],
    }
    this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
    }
    

    companydata (){
        // POST request using fetch with error handling
        axios.post('https://camprec.herokuapp.com/api/company/data',this.body,this.header)
            .then(function(response) {
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem('company',JSON.stringify(response.data))
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            
    }; 


    render() {
        this.companydata()
        var arr= JSON.parse(localStorage.getItem("company"));
        return (
            <>
            <section className="pop image width"> 
            <div>
                <Cards name={arr.name} location={arr.location} email={arr.email} year={arr.year_of_established} url={arr.vedio_link} description={arr.about } image="https://i.pinimg.com/474x/53/a3/fa/53a3fa9b77f7dc8c321f05b1661cc305.jpg" />
            </div>

            </section>
            </>
        );
}  
};

export default Viewcompany;