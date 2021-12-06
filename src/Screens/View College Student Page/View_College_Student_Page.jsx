import React,{Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_viewcollege from './navbar_viewcollege';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import ReactLoading from 'react-loading';
var i;
function Rows(props) {
        {
            
            i="/viewstudent/i="+props.id
        }
        return (
                    <>
                    <tr>
                                <td>{props.sno+1}</td>
                                <td>{props.name}</td>
                                <td>{props.email}</td>
                                <td><a className="btn size2" href={i}>View</a></td>
                    </tr>
                        </>
        )
}
const Rowlist = ({ Rowlists }) => {
    return (
        Rowlists?.map((user,i) => {
                    return (<>
                        <Rows key={i} sno={i} name={Rowlists[i].name} email={Rowlists[i].email} id={Rowlists[i]._id}></Rows>
                        </>
                    );
                    })
    )}
    var arr= localStorage.getItem("college_id");
class Adminstudent extends Component {
        constructor(props){
        super(props);
        this.body = { 
            "college_id" : arr,
        }
        this.state={
            k : false
       }
        this.header = {'Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        }
        
    
        studentlist (){
            var student = [];
            // POST request using fetch with error handling
            axios.post('https://camprec.herokuapp.com/api/college/studentlist',this.body,this.header)
                .then(function(response) {
                    // check for error response
                    if (response.status != 200) {
                        // get error message from body or default to response status
                        const error = (response.data && response.data.message) || response.status;
                        return Promise.reject(error);
                    }
                    console.log(response.data.length);
                    
                    localStorage.setItem('studentlist',JSON.stringify(response.data))
                    this.setState({k: true});
                }.bind(this))
             .catch(error => {
                    console.log(error);
                    window.alert("something went wrong")
                    
                });
                if(student)
                return student;
                
        }; 
        componentDidMount(){
            this.studentlist();
        }
    
        render() {
            
            return (
                <>
                <Navbar_viewcollege/>
                { this.state.k ? 
                <section className="width">
                    
                    <Table className="tab">
                    <thead>
                        <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>View</th>
                        </tr>   
                    </thead>
                    <tbody>
                    <Rowlist Rowlists={JSON.parse(localStorage.getItem('studentlist'))}></Rowlist>
                    </tbody>
                    </Table>
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

export default Adminstudent ;