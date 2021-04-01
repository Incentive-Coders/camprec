import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_company from './navbar_company';
import axios from 'axios';
function Cards(props) {
      var i="/viewcollege/i="+props.id
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text">{props.content}</p>
                            <div className='pop' >
                            <a href={i} className="btn btn-primary  text_size left_m2">View</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Cardlist = ({ collegelist }) => {
    return (
        <div className="gridwraper">
        {
            collegelist.map((user, i) => {
            return (<>
                <Cards
                key={i}
                title={collegelist[i].name}
                content={collegelist[i].about}
                location = {collegelist[i].location}
                id={collegelist[i]._id}
                />
                </>
            );
            })
        }
        </div>
    );
    }
var arr= JSON.parse(localStorage.getItem("college"));
class companycollege extends Component {
    constructor(props){
    super(props);
    }
    

    collegelist (){
        var college = [];
        // POST request using fetch with error handling
        axios.get('https://camprec.herokuapp.com/api/college/list')
            .then(function(response) {
                console.log(response)
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (response.data && response.data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(response.data.length);
                console.log(response.data);
                localStorage.setItem('college',JSON.stringify(response.data))
        })
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            if(college)
            return college;
            
    }; 


    render() {
        this.collegelist()
        return (
            <>
            <Navbar_company />
            <section className="image width heights">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Colleges</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                            <Cardlist collegelist={JSON.parse(localStorage.getItem('college'))}/>
                        </div>
            </section>
            </>
        );
    };
}

export default companycollege ;