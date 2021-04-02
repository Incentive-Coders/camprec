import React , {useEffect} from 'react';
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
import Viewcompanycollege from './viewcompanycollege';
import Viewapplicantcollege from './viewapplicantcollege';
import Viewapplicantstudent from './viewapplicantstudent';
import Viewstudent from './viewstudent';
import editcollege from './editcollege';
import viewcollegestudent from './viewcollegestudent';
import Viewcollegestudentview from './viewcollegestudentview';
import ReactGa from 'react-ga';
function App (){
    
    useEffect(() => {
        ReactGa.initialize('UA-193643826-1');

        ReactGa.pageview(window.location.pathname + window.location.search)
    }, []);

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
        <Route path="/viewcompanycollege/" component={Viewcompanycollege}/>
        <Route path="/viewapplicantcollege/" component={Viewapplicantcollege}/>
        <Route path="/viewapplicantstudent/" component={Viewapplicantstudent}/>
        <Route path="/viewstudent/" component={Viewstudent}/>
        <Route exact path="/editcompany" component={editcompany}/>
        <Route exact path="/editcollege" component={editcollege}/>
        <Route exact path="/viewcollegestudent" component={viewcollegestudent}/>
        <Route exact path="/viewcollegestudentview/" component={Viewcollegestudentview}/>
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;