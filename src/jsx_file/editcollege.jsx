import {React, Component} from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_Admin from './navbar_admin';
import {Form, Input} from 'antd';
import axios from 'axios';
import FormItem from 'antd/lib/form/FormItem';
class editcollege extends Component {
    constructor(props){
    var arr= JSON.parse(localStorage.getItem("college"));
    super(props)
    this.state = {
        title : arr.name,
        location: arr.location,
        college_description:arr.about,
        id:'',
        website:arr.website,
        facebook:arr.social_media.facebook,
        twitter:arr.social_media.twitter,
        linkedin:arr.social_media.linkedin,
        instagram:arr.social_media.instagram,
        vedio_link:arr.vedio_link
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.updatelocation = this.updatelocation.bind(this);
    this.updatecollege_description = this.updatecollege_description.bind(this);
    this.updatewebsite=this.updatewebsite.bind(this);
    this.updatefacebook=this.updatefacebook.bind(this);
    this.updatetwitter=this.updatetwitter.bind(this);
    this.updatelinkedin=this.updatelinkedin.bind(this);
    this.updateinstagram=this.updateinstagram.bind(this);
    this.updatevedio_link = this.updatevedio_link.bind(this);
    this.edit_college = this.edit_college.bind(this);
    }
    
    
    updateInput(event){
    this.setState({title : event.target.value})
    }
    updatelocation(event){
        this.setState({location : event.target.value})
    }
    updatecollege_description(event){
        this.setState({college_description : event.target.value})
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
    edit_college (){
        var arr= JSON.parse(localStorage.getItem("college"));
        console.log(this.state.title);
        console.log(this.state.location);
        console.log(this.state.college_description);
        // POST request using fetch with error handling
        const body =  
            { 
                "name" : this.state.title,
                "location" : this.state.location,  
                "about" : this.state.college_description,  
                "college_id" : arr._id,
                "website":this.state.website,
                "social_media" : {"twitter" : this.state.twitter,"facebook" : this.state.facebook,"linkedin" : this.state.linkedin,"instagram" : this.state.instagram},
                "vedio_link" : this.state.vedio_link 
            };
        const header = {'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'};
        axios.post('https://camprec.herokuapp.com/api/college/edit',body,{header})
            .then(function(response) {
                console.log("*");
                const data = response.data;
                // check for error response
                if (response.status != 200) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                window.alert("college data edited Successfuly");
                localStorage.setItem("college",JSON.stringify(response.data))
                window.location.replace('/adminhome');
                 
        })
         .catch(error => {
                console.error('There was an error!');
                 window.alert("There was some error unable to editing college data");
                
            });
            
    };
    
    render(){
        var arr= JSON.parse(localStorage.getItem("college"));
        return (
            <>
            <Navbar_Admin/>
            <section className="image width ">
                                 <h3 className="card-title card_us"><strong>Edit college</strong></h3>
                                    <Form className="editjb margin-top center m-l" >
                                        <FormItem >
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className=" boderb form-control " defaultValue={arr.name} placeholder="college name" onChange={this.updateInput} required />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.location} placeholder="college location" onChange={this.updatelocation} />
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.website} placeholder="college Website"  onChange={this.updatewebsite} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className=" boderb form-control" defaultValue={arr.social_media.facebook} placeholder="college facebook-link"  onChange={this.updatefacebook} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.social_media.linkedin} placeholder="college LinkedIn-link"  onChange={this.updatelinkedin} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.social_media.instagram} placeholder="college instagram-link"  onChange={this.updateinstagram} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.social_media.twitter} placeholder="college twitter-link"  onChange={this.updatetwitter} required/>
                                        </div>
                                        </FormItem>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control" defaultValue={arr.vedio_link} placeholder="Disc Vedio Link"  onChange={this.updatevedio_link} required/>
                                        </div>
                                        <FormItem>
                                        <div className="form-group margin-t center">
                                            <Input type="TEXT" className="boderb form-control size" defaultValue={arr.about} placeholder="college Description"  onChange={this.updatecollege_description} required/>
                                        </div>
                                        </FormItem>
                                        </FormItem>
                                        <input type= "submit" className="btn margin-top m-l2 center" onClick={this.edit_college} id='button'  value="Submit"/>
                                    </Form>
            </section>
            </>
        );
    };
} 

export default editcollege;