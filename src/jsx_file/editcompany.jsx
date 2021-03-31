import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_company from './navbar_company';
import {Form, Input} from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
class editcompany extends Component {
    constructor(props){
    super(props)
    this.state = {
        title : '',
        location: '',
        company_description:'',
        id:'',
        website:'',
        facebook:'',
        twitter:'',
        linkedin:'',
        instagram:'',
        vedio_link:''
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatewebsite=this.updatewebsite(this);
    this.updatefacebook=this.updatefacebook(this);
    this.updatetwitter=this.updatetwitter(this);
    this.updatelinkedin=this.updatelinkedin(this);
    this.updateinstagram=this.updateinstagram(this);
    this.updatelocation = this.updatelocation.bind(this);
    this.updatecompany_description = this.updatecompany_description.bind(this);
    this.updatevedio_link = this.updatevedio_link.bind(this);
    this.edit_company = this.edit_company.bind(this);
    }
    
    
    updateInput(event){
    this.setState({title : event.target.value})
    }
    updatelocation(event){
        this.setState({location : event.target.value})
    }
    updatecompany_description(event){
        this.setState({company_description : event.target.value})
    }
    updatewebsite(event){
        this.setState({website : event.target.value})
    }
    updatetwitter(event){
        this.setState({twitter : event.target.value})
    }
    updateinstagram(event){
        this.setState({instagram : event.target.value})
    }
    updatefacebook(event){
        this.setState({facebook : event.target.value})
    }
    updatelinkedin(event){
        this.setState({linkedin : event.target.value})
    }
    updatevedio_link(event){
        this.setState({vedio_link : event.target.value})
    }
    edit_company (){
        var arr= JSON.parse(localStorage.getItem("company"));
        console.log(this.state.title);
        console.log(this.state.location);
        console.log(this.state.company_description);
        // POST request using fetch with error handling
        const body =  
            { 
                "name" : this.state.title,
                "location" : this.state.location,  
                "company_description" : this.state.company_description,  
                "id" : arr._id,
                "website":this.state.website,
                "social_media" : {"twitter" : this.state.twitter,"facebook" : this.state.facebook,"linkedin" : this.state.linkedin,"instagram" : this.state.instagram},
                "vedio_link" : this.state.vedio_link 
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/company/edit',body,{header})
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                window.alert("company data edited Successfuly");
                window.location.replace('/companycompany');
                 
        })
         .catch(error => {
                console.error('There was an error!');
                 window.alert("There was some error unable to editing company data");
                
            });
            
    };
    
    render(){
        return (
            <>
            <Navbar_company/>
            <section className="image width height">
                                 <h3 className="card-title card_us"><strong>Edit company</strong></h3>
                                    <Form className="editjb margin-top center" >
                                        <FormItem >
                                        <div className="form-group margin-t ">
                                            <Input type="TEXT" className="form-control"  placeholder="company name" onChange={this.updateInput} required />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control" placeholder="company location" onChange={this.updatelocation} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company Description"  onChange={this.updatecompany_description} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company Website"  onChange={this.updatewebsite} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company facebook-link"  onChange={this.updatefacebook} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company LinkedIn-link"  onChange={this.updatelinkedin} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company instagram-link"  onChange={this.updateinstagram} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="company twitter-link"  onChange={this.updatetwitter} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t">
                                            <Input type="TEXT" className="form-control size" placeholder="Disc Vedio Link"  onChange={this.updatevedio_link} required/>
                                        </div>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-top margin-b" onClick={this.edit_company} id='button'  value="Submit"/>
                                    </Form>
            </section>
            </>
        );
    };
} 

export default editcompany;