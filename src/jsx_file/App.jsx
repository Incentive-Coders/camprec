import React from 'react';
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/css/bootstrap.min.css";
import "C:\\Users\\yasharth dubey\\Documents\\WebProjects\\camprec2\\node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Companyhome from './companyhome';
import Studenthome from './studenthome';
import AdminLogin from './adminlogin';
import Adminhome from './adminhome';
import Studentlogin from './studentlogin';
import CompanyLogin from './companylogin';
const App =() => {
    return (
        <>
        <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/companyhome" component = {Companyhome} />
        <Route exact path = "/studenthome" component = {Studenthome} />
        <Route exact path = "/adminhome" component = {Adminhome} />
        <Route exact path="/adminlogin" component={AdminLogin}/>
        <Route exact path="/studentlogin" component={Studentlogin}/>
        <Route exact path="/companylogin" component={CompanyLogin}/>
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;