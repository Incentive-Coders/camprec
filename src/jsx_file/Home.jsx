import React, { useState } from 'react';
import web from "../images/4180157-removebg-preview.png";
import web1 from "../images/student-removebg.png"
import web2 from "../images/company.jpg";
import web3 from "../images/admin.jpg";
import web4 from "../images/Capture-removebg-preview.png";
import web5 from "../images/login.jpg"
import { Button, Modal, Form, Input, Radio } from 'antd';
import "antd/dist/antd.css";
import "../index.css";
import"../css/home.css";
const Home =() => {
    return (
      <>
        <section id = "header" className = "bg d-flex align-items-center">
            <div className = "contianer-fluid ">
                <div className = "row ">
                    <div className = "col-10 mx-auto home ">
                        <div className = "col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 get_started">
                            <h2>
                                Get hired by the company of your choice with <strong className = "brand-name">Camprec</strong>
                            </h2>
                            <h5 className = "mt-3">
                                An online portal to make heptic hiring process easy
                            </h5>
                            <div className="mt-3">
                                <a href = "#join-us" className = "btn"> 
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 header-img animated ">
                            <img src={web} className = "image-fluid animated" alt = "home img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id = "join-us">
        <img src={web4} className = "logo logos" alt = "home img"/>
        <div className = "my-5 mx-auto align-item-center ">
            <h1 className="tab-center align-item-center join_us"> <strong>Join us</strong></h1>
        </div>
        <div className = "row">
            <div className="col-10 mx-auto">
                <div className = "row">
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border" >
                            <div class="card-body card_us">
                                <img src={web1} className = "student card_us" alt = "home img"/>
                                <h5 class="card-title"><strong>For Student</strong></h5>
                                <p class="card-text"></p>
                                <Buttons name="Student Login"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border" >
                            <div class="card-body card_us">
                            <img src={web2} className = "company card_us" alt = "home img"/>
                                <h5 class="card-title"><strong>For Company</strong></h5>
                                <p class="card-text"></p>
                                <Buttons name="Company Login"/>
                            </div>
                        </div>
                    </div>
                    <div className = "col-md-4 col-10 mx-auto">
                        <div class="card card_border">
                            <div class="card-body card_us">
                            <img src={web3} className = "company card_us" alt = "home img"/>
                                <h5 class="card-title card_us"><strong>For Admin</strong></h5>
                                <p class="card-text"></p>
                                <Buttons name="Admin Login"/></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};
class Buttons extends React.Component {
  render(){
     // popup and form code
      const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
          const [form] = Form.useForm();
          return (
            <Modal
            visible={visible}
            title={this.props.name}
            okText="Login"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
              <section className="card_us">
              <img src={web5} className = "login_img card_us" alt = "home img"/>
              </section>              
            <Form 
            
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: 'public',
              }}>
              <Form.Item 
                name="username"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter username!',
                  },
                ]}
              >
                <Input className="login_form "/>
              </Form.Item>
              <Form.Item name="password" label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password!',
                },
              ]}
              >
                <Input type="password" className="login_form"/>
              </Form.Item>  
            </Form>
          </Modal>
          );
        };
        const CollectionsPage = () => {
          const [visible, setVisible] = useState(false);
        
          const onCreate = (values) => {
            console.log('Received values of form: ', values);
            setVisible(false);
          };
          return (
            <div>
                <a className="btn" onClick={() => { setVisible(true);}}>
                Login
              </a>
              <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                  setVisible(false);
                }}
              />
            </div>
          );
        };
    return (
        <div>
            <CollectionsPage/>
       </div>
    );
  }
  }

export default Home;
