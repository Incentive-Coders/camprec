import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_admin from './navbar_admin';
import axios from 'axios';
function Cards(props) {
    var i="/viewadmincompany/i="+props.id
    return (
                <>
                   <div className="card widths " >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title  centers">{props.location}</h6></strong>
                            <p className="card-text hfixed">{props.content}</p>
                            <div className='pop' >
                            <a href={i} className="btn btn-primary  text_size left_m2 m_t">View</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Cardlist = ({ Companylist }) => {
    return (
        <div className="gridwraper">
        {
            Companylist.map((user, i) => {
            return (<>
                <Cards
                key={i}
                title={Companylist[i].name}
                content={Companylist[i].about}
                location = {Companylist[i].location}
                id={Companylist[i]._id}
                />
                </>
            );
            })
        }
        </div>
    );
    }
var arr= JSON.parse(localStorage.getItem("company"));
class AdminCompany extends Component {
    constructor(props){
    super(props);
    this.state={
        j : 1
   }
   this.next = this.next.bind(this);
   this.back = this.back.bind(this);
    }
    

    companylist (){
        var company = [];
        // POST request using fetch with error handling
        console.log(this.state.j);
        var k ="https://camprec.herokuapp.com/api/company/list/"+this.state.j.toString();
        console.log(k);
        // POST request using fetch with error handling
        axios.get(k)
            .then(function(response) {
                console.log(response)
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
            if(company)
            return company;
            
    }; 
    back (){
        if(this.state.j===1){
            return null;
        }
        else{
            this.setState({j: this.state.j - 1});
            
    }}
    next(){    
        this.setState({j: this.state.j + 1});
        
    }

    render() {
        this.companylist()
        return (
            <>
            <Navbar_admin />
            <section className="image width heights">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Companies</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                            <Cardlist Companylist={JSON.parse(localStorage.getItem('company'))}/>
                        </div>
            </section>
            <div className="m-l3">
                            <button className="btn text_size m_t " onClick={this.back}>&laquo; Previous</button>&nbsp;&nbsp;&nbsp;<button className="btn text_size m_t" onClick={this.next}>Next &raquo;</button>
                        </div>
            </>
        );
    };
}

export default AdminCompany ;