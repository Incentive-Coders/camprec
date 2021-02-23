import React from 'react';
<<<<<<< HEAD
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
=======
>>>>>>> parent of 8bac25a (added bootstrap)
import web from "../images/contactus.png";
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form, Input} from 'antd';
import Navbar from "./Navbar";
const Contact =() => {
    return (
        <>
        <Navbar/>
        <section className="image width">
            <div className = "contianer">
                <div className = "row ">
                    <div className = "col-10 mx-auto home">
                        <div className = "col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started ">
                        <div className="card-body card_us topmargin">
                             <h3 className="card-title card_us"><strong>Contact Us</strong></h3>
                                <Form>
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="TEXT" className="form-control" placeholder="ENTER YOUR NAME" required />
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
                           
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 header-img animated leftmargin">
                            <img src={web} className = "image-fluid animated aboutimg" alt = "about img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Contact;