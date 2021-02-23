import React from 'react';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../images/contactus.png";
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
const About =() => {
    return (
            <div className = "bg grid-wrapper ">
                <div className="item11 card-body card_us bottommargin get_started">
                     <h3 className="card-title card_us"><strong>Contact Us</strong></h3>
                        <Form>
                            <FormItem>
                            <div className="form-group margin-t">
                                <Input type="TEXT" className="form-control length" placeholder="ENTER YOUR NAME" required />
                            </div>
                            </FormItem>
                            <FormItem>
                            <div className="form-group margin-t">
                                <Input type="TEXT" className="form-control" placeholder="ENTER YOUR EMAIL-ID" required/>
                            </div>
                            </FormItem>
                                <FormItem>
                            <div className="form-group margin-t">
                                <Input type="TEXT" className="form-control" placeholder="SUBJECT" required/>
                            </div>
                            </FormItem>
                            <FormItem>
                            <div className="form-group margin-t">
                                <Input type="TEXT" className="size form-control" placeholder="MESSAGE " required/>
                            </div>
                            </FormItem>
                            <Input type= "submit" className="btn margin-t" value="Submit"/>
                        </Form>
                </div>
                <div className="item2 header-img animated ">
                    <img src={web} className = "item2 image-fluid animated imgsize2" alt = "about img"/>
                </div>
            </div>
    );
};

export default About;