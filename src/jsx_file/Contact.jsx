import React from 'react';
import web from "../images/contactus.png";
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import FormItem from 'antd/lib/form/FormItem';
import {Form, Input} from 'antd';
const About =() => {
    return (
        <>
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
                                        <Input type="text" className="form-control boderwidth" placeholder="ENTER YOUR NAME" />
                                    </div>
                                    </FormItem>
                                    <FormItem>
                                    <div className="form-group margin-t">
                                        <Input type="TEXT" className="form-control boderwidth" placeholder="ENTER YOUR EMAIL-ID"/>
                                    </div>
                                    <div className="form-group margin-t">
                                        <Input type="TEXT" className="form-control boderwidth" placeholder="SUBJECT"/>
                                    </div>
                                    <div className="form-group margin-t">
                                        <Input type="TEXT" className="form-control size boderwidth" placeholder="MESSAGE "/>
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

export default About;