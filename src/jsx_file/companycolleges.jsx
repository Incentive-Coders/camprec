import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_company from './navbar_company';
import ReactLoading from 'react-loading';
import axios from 'axios';
function Cards(props) {
      var i="/viewcompanycollege/i="+props.id
    return (
                <>
                   <div className="card widths" >
                        <div className="card-body">
                            <strong><h4 className="card-title centers">{props.title}</h4></strong>
                            <strong><h6 className="card-title fonts hfixed2 centers">{props.location}</h6></strong>
                            <p className="card-text hfixed">{props.content}</p>
                            <div className='pop' >
                            <a href={i} className="btn btn-primary  text_size left_m2 m_t">View</a>
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
    this.state={
        j : 1,
        k : false,
        p : 0
   }
   this.next = this.next.bind(this);
   this.back = this.back.bind(this);
}
    
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
    componentDidMount(){
        if(this.state.j===1){this.collegelist()}
    }   
    componentDidUpdate(){
        if(this.state.j!=this.state.p)
        {
            this.collegelist()
        }
    }
    collegelist (){
        var college = [];
        console.log(this.state.j);
        var k ="https://camprec.herokuapp.com/api/college/list/"+this.state.j.toString();
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
                console.log(response.data.length);
                console.log(response.data);
                localStorage.setItem('college',JSON.stringify(response.data))
                this.setState({k: true});
                this.setState({p : this.state.j});
        }.bind(this))
         .catch(error => {
                console.log(error);
                window.alert("something went wrong")
                
            });
            if(college)
            return college;
            
    }; 
    
    render() {
        return (
            <>
            <Navbar_company />
            { this.state.k?
            <section className="image width ">
                        <div className = "get_started">
                                <h2 className='text_center margintop'>
                                <strong className = "brand-name leftmargin">Colleges</strong>
                                </h2>
                        </div>
                        <div className="gridwraper">
                            <Cardlist collegelist={JSON.parse(localStorage.getItem('college'))}/>
                        </div>
                        <div className="m-l3">
                            <button className="btn text_size m_t " onClick={this.back}>&laquo; Previous</button>&nbsp;&nbsp;&nbsp;<button className="btn text_size m_t" onClick={this.next}>Next &raquo;</button>
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

export default companycollege ;