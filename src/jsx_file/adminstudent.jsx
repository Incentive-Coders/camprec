import React,{Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_admin from './navbar_admin';
import axios from 'axios';

function Rows(props) {
    return (
                <>
                <tr>
                            <td>{props.sno}</td>
                            <td>{props.name}</td>
                            <td>{props.email}</td>
                </tr>
                    </>
    )
}
const Rowlist = ({ rowlist }) => {
    return (
        rowlist.map((user, i) => {
                    return (<>
                        <Rows key={i} sno={i} name={rowlist[i].name} email={rowlist[i].email}></Rows>
                        </>
                    );
                    })
    )}
    var arr= JSON.parse(localStorage.getItem("college"));
class Adminstudent extends Component {
        constructor(props){
        super(props);
        this.body = { 
            "email" : arr.email,
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
                    localStorage.setItem('studentlist',JSON.stringify(response.data))
            })
             .catch(error => {
                    console.log(error);
                    window.alert("something went wrong")
                    
                });
                if(student)
                return student;
                
        }; 
    
    
        render() {
            this.studentlist()
            return (
                <>
                <Navbar_admin/>
                <section className="width">
                    <table className="">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>   
                    </thead>
                    <tbody>
                    <Rowlist rowlist={JSON.parse(localStorage.getItem('studentlist'))}></Rowlist>
                    </tbody>
                    </table>
                </section>
                </>
            );
        };
    }

export default Adminstudent ;