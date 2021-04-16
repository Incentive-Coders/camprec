import React , {useEffect,useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import GoogleAd from "./About"
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
import addjobs from './addjobs';
import addstudent from './addstudent';
import editjobs from './editjobs';
import editcompany from './editcompany';
import showapplicants from './showapplicant';
import Viewcompanycollege from './viewcompanycollege';
import Viewapplicantcollege from './viewapplicantcollege';
import Viewapplicantstudent from './viewapplicantstudent';
import Viewstudent from './viewstudent';
import editcollege from './editcollege';
import viewcollegestudent from './viewcollegestudent';
import Viewadminstd from './viewadminstd';
import ReactGa from 'react-ga';
import Viewcompany from './viewadmincompany';
import Signupcompany from './companysignup';
import Signupadmin from './adminsignup';
import Signupstudent from './studentsignup';
import addexp from './addexp';
import addedu from './addedu';
import addcer from './addcer';
import delexp from './delexp';
import deledu from './deledu';
import delcer from './delcer';
import adminjobs from './adminjobs';
import Viewstdcompany from './viewstudentcompany';
import StudentCompany from './studentcompanies';
import studentapply from './studentapply';
import adminapply from './adminapply';
import deljobs from './deljobs';
import premium from './premium';
function App (){
    useEffect(() => {
        ReactGa.initialize('UA-193643826-1');

        ReactGa.pageview(window.location.pathname + window.location.search)
    }, []);

    return (
        <>
        <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/about" component = {GoogleAd} />
        <Route exact path = "/contact" component = {Contact} />
        <Route exact path = "/companyhome" component = {Companyhome} />
        <Route exact path = "/studenthome" component = {Studenthome} />
        <Route exact path = "/adminhome" component = {Adminhome} />
        <Route exact path="/adminlogin" component={AdminLogin}/>
        <Route exact path="/studentlogin" component={Studentlogin}/>
        <Route exact path="/companylogin" component={CompanyLogin}/>
        <Route exact path="/companyjobs" component={Companyjobs}/>
        <Route exact path="/adminjobs" component={adminjobs}/>
        <Route exact path="/adminstudent" component={Adminstudent}/>
        <Route exact path="/studentjobs" component={Studentjobs}/>
        <Route exact path="/companycolleges" component={Companycolleges}/>
        <Route exact path = "/admincompanies" component = {Admincompanies} />
        <Route exact path = "/studentcompanies" component = {StudentCompany} />
        <Route exact path="/studentcourses" component={Studentcourses}/>
        <Route exact path="/addjobs" component={addjobs}/>
        <Route exact path="/addstudent" component={addstudent}/>
        <Route exact path="/premium" component={premium}/>
        <Route path="/editjobs/" component={editjobs}/>
        <Route path="/deljobs/" component={deljobs}/>
        <Route path="/showapplicants/" component={showapplicants}/>
        <Route path="/viewcompanycollege/" component={Viewcompanycollege}/>
        <Route path="/viewapplicantcollege/" component={Viewapplicantcollege}/>
        <Route path="/viewapplicantstudent/" component={Viewapplicantstudent}/>
        <Route path="/viewstudent/" component={Viewstudent}/>
        <Route path="/studentapply/" component={studentapply}/>
        <Route path="/adminapply/" component={adminapply}/>
        <Route exact path="/editcompany" component={editcompany}/>
        <Route exact path="/editcollege" component={editcollege}/>
        <Route exact path="/viewcollegestudent" component={viewcollegestudent}/>
        <Route exact path="/addexp" component={addexp}/>
        <Route exact path="/delexp" component={delexp}/>
        <Route exact path="/deledu" component={deledu}/>
        <Route exact path="/delcer" component={delcer}/>
        <Route exact path="/addedu" component={addedu}/>
        <Route exact path="/addcer" component={addcer}/>
        <Route path="/viewadminstd/" component={Viewadminstd}/>
        <Route path="/viewadmincompany/" component={Viewcompany}/>
        <Route path="/viewstudentcompany/" component={Viewstdcompany}/>
        <Route path="/companysignup/" component={Signupcompany}/>
        <Route path="/adminsignup/" component={Signupadmin}/>
        <Route path="/studentsignup/" component={Signupstudent}/>
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;