import React from 'react';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Navbar from "./Navbar";
import adminLogin from "./adminlogin";
import studentlogin from "./studentlogin";
import companyLogin from "./companylogin";
const App =() => {
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/service" component = {Service} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path="/adminlogin" component={adminLogin}/>
        <Route exact path="/studentlogin" component={studentlogin}/>
        <Route exact path="/companylogin" component={companyLogin}/>
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;