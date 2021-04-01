import React from 'react';
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
import Companyjobs from './companyjobs';
import Adminstudent from './adminstudent';
import Studentjobs from './studentjobs';
import Companycolleges from './companycolleges';
import Admincompanies from './admincompanies';
import Studentcourses from './studentcourses';
import premium from './premium';
import addjobs from './addjobs';
import editjobs from './editjobs';
import editcompany from './editcompany';
import showapplicants from './showapplicant';
import Viewcollege from './viewcollege';
import Viewstudent from './viewstudent';
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
        <Route exact path="/companyjobs" component={Companyjobs}/>
        <Route exact path="/adminstudent" component={Adminstudent}/>
        <Route exact path="/studentjobs" component={Studentjobs}/>
        <Route exact path="/companycolleges" component={Companycolleges}/>
        <Route exact path = "/admincompanies" component = {Admincompanies} />
        <Route exact path="/studentcourses" component={Studentcourses}/>
        <Route exact path="/premium" component={premium}/>
        <Route exact path="/addjobs" component={addjobs}/>
        <Route path="/editjobs/" component={editjobs}/>
        <Route path="/showapplicants/" component={showapplicants}/>
        <Route path="/viewcollege/" component={Viewcollege}/>
        <Route path="/viewstudent/" component={Viewstudent}/>
        <Route exact path="/editcompany" component={editcompany}/>
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;