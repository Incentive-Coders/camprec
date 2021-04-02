import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_showapplicants from './navbar_showapplicants';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
var l= window.location.href
var a=l.split('=')
console.log(a[1])
var i;
function Rows(props) {
    {
        
        i="/viewapplicantcollege/i="+props.id
    }
    return (
                <>
                <tr>
                            <td>{props.sno}</td>
                            <td>{props.name}</td>
                            <td>{props.email}</td>
                            <td><a className="btn size2" href={i}>View</a></td>
                </tr>
                    </>
    )
}
function Rows1(props) {
    {
        
        i="/viewapplicantstudent/i="+props.id
    }
    return (
                <>
                <tr>
                            <td>{props.sno}</td>
                            <td>{props.name}</td>
                            <td>{props.email}</td>
                            <td><a className="btn size2" href={i}>View</a></td>
                </tr>
                    </>
    )
}
const Rowlist = ({ Rowlists }) => {
    return (
        Rowlists.map((user,i) => {
                    return (<>
                        <Rows key={i} sno={i} name={Rowlists[i].name} email={Rowlists[i].email} id={Rowlists[i]._id}></Rows>
                        </>
                    );
                    })
    )}
const Rowlist1 = ({ Rowlists }) => {
        return (
            Rowlists.map((user,i) => {
                        return (<>
                            <Rows1 key={i} sno={i} name={Rowlists[i].name} email={Rowlists[i].email}id={Rowlists[i]._id} ></Rows1>
                            </>
                        );
                        })
        )}
class showapplicants extends Component {
    
    showstudent (){
        // POST request using fetch with error handling
        const body =  
            {  
                "job_id" : a[1]
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/jobs/slist',body,{header})
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem("slist",JSON.stringify(response.data))
                 
        })
         .catch(error => {
                console.error('There was an error!');
                }
            );
            
    };
    showcollege (){
        // POST request using fetch with error handling
        const body =  
            {  
                "job_id" : a[1]
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/jobs/clist',body,{header})
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                localStorage.setItem("clist",JSON.stringify(response.data))
                 
        })
         .catch(error => {
                console.error('There was an error!');
            });
            
    };
    
    render(){
        this.showcollege();
        this.showstudent()
        return (
            <>
            <Navbar_showapplicants/>
            <section className="width">
                  <div className="mart"> 
                  <h2 className=' margintop'>
                             <strong className = "brand-name leftmargin">Colleges</strong>
                            </h2>
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
                    <Rowlist Rowlists={JSON.parse(localStorage.getItem('clist'))}></Rowlist>
                    </tbody>
                    </Table>
                    </div>
                    <div className="mart">  
                    <h2 className='margintop'>
                             <strong className = "brand-name leftmargin">Student</strong>
                    </h2>
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
                    <Rowlist1 Rowlists={JSON.parse(localStorage.getItem('slist'))}></Rowlist1>
                    </tbody>
                    </Table>
                    </div>
                </section>
            </>
        );
    };
} 

export default showapplicants;