import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import GoogleAd from "../About Page/About";
import Contact from "../Contact/Contact";
import Companyhome from "../Company Home Page/Company_Home_Page";
import Studenthome from "../Student Home Page/Student_Home_Page";
import AdminLogin from "../Admin Login Page/Admin_Login_Page";
import Adminhome from "../Admin Home Page/Admin_Home_Page";
import Studentlogin from "../Student Login Page/Student_Login_Page";
import CompanyLogin from "../Company Login Page/Company_Login_Page";
import Companyjobs from "../Company Job List Page/Company_Job_List_Page";
import Adminstudent from "../Admin Student List Page/Admin_Student_List_Page";
import Studentjobs from "../Student Jobs Page/Student_Jobs_Page";
import Companycolleges from "../Company College List Page/Company_College_List_Page";
import Admincompanies from "../Admin Company Page/Admin_Company_Page";
import Studentcourses from "../Student Home Page/Student Courses Page/Student_Courses_Page";
import addjobs from "../Add Job Page/Add_Job_Page";
import addstudent from "../Add Student Page/Add_Student_Page";
import editjobs from "../Edit Job Page/Edit_Job_Page";
import editcompany from "../Edit Company Page/Edit_Company_Page";
import showapplicants from "../Show Applicant Page/Show_Applicant_Page";
import Viewcompanycollege from "../View Company College/View_Company_College";
import Viewapplicantcollege from "../View Applicant College Page/View_Applicant_College_Page";
import Viewapplicantstudent from "../View Applicant Student Page/View_Applicant_Student_Page";
import Viewstudent from "../View Student Page/View_Student_Page";
import editcollege from "../Edit College Page/Edit_College_Page";
import viewcollegestudent from "../View College Student Page/View_College_Student_Page";
import Viewadminstd from "../View Admin Std Page/View_Admin_Std_Page";
import ReactGa from "react-ga";
import Viewcompany from "../View Admin Company Page/View_Admin_Company_Page";
import Signupcompany from "../Company Signup Page/Company_Signup_Page";
import Signupadmin from "../Admin Signup Page/Admin_Signup_Page";
import Signupstudent from "../Student Signup Page/Student_Signup_Page";
import addexp from "../Add Experience Page/Add_Experience_Page";
import addedu from "../Add Education Page/Add_Education_Page";
import addcer from "../Add Certificate Page/Add_Certificate_Page";
import delexp from "../Delete Experience Page/Delete_Experience_Page";
import deledu from "../Delete Education Page/Delete_education_Page";
import delcer from "../Delete Certificate Page/Delete_Certificate_Page";
import adminjobs from "../Admin Jobs Page/Admin_Jobs_Page";
import Viewstdcompany from "../View Student Company Page/View_Student_Company_Page";
import StudentCompany from "../Student Companies Page/Student_Companies_Page";
import studentapply from "../Student Apply Page/Student_Apply_Page";
import adminapply from "../Admin Apply/Admin_Apply";
import deljobs from "../Delete Job Page/Delete_Job_Page";
import premium from "../Premium/Premium";
function App() {
  useEffect(() => {
    ReactGa.initialize("UA-193643826-1");

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={GoogleAd} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/companyhome" component={Companyhome} />
      <Route exact path="/studenthome" component={Studenthome} />
      <Route exact path="/adminhome" component={Adminhome} />
      <Route exact path="/adminlogin" component={AdminLogin} />
      <Route exact path="/studentlogin" component={Studentlogin} />
      <Route exact path="/companylogin" component={CompanyLogin} />
      <Route exact path="/companyjobs" component={Companyjobs} />
      <Route exact path="/adminjobs" component={adminjobs} />
      <Route exact path="/adminstudent" component={Adminstudent} />
      <Route exact path="/studentjobs" component={Studentjobs} />
      <Route exact path="/companycolleges" component={Companycolleges} />
      <Route exact path="/admincompanies" component={Admincompanies} />
      <Route exact path="/studentcompanies" component={StudentCompany} />
      <Route exact path="/studentcourses" component={Studentcourses} />
      <Route exact path="/addjobs" component={addjobs} />
      <Route exact path="/addstudent" component={addstudent} />
      <Route exact path="/premium" component={premium} />
      <Route path="/editjobs/" component={editjobs} />
      <Route path="/deljobs/" component={deljobs} />
      <Route path="/showapplicants/" component={showapplicants} />
      <Route path="/viewcompanycollege/" component={Viewcompanycollege} />
      <Route path="/viewapplicantcollege/" component={Viewapplicantcollege} />
      <Route path="/viewapplicantstudent/" component={Viewapplicantstudent} />
      <Route path="/viewstudent/" component={Viewstudent} />
      <Route path="/studentapply/" component={studentapply} />
      <Route path="/adminapply/" component={adminapply} />
      <Route exact path="/editcompany" component={editcompany} />
      <Route exact path="/editcollege" component={editcollege} />
      <Route exact path="/viewcollegestudent" component={viewcollegestudent} />
      <Route exact path="/addexp" component={addexp} />
      <Route exact path="/delexp" component={delexp} />
      <Route exact path="/deledu" component={deledu} />
      <Route exact path="/delcer" component={delcer} />
      <Route exact path="/addedu" component={addedu} />
      <Route exact path="/addcer" component={addcer} />
      <Route path="/viewadminstd/" component={Viewadminstd} />
      <Route path="/viewadmincompany/" component={Viewcompany} />
      <Route path="/viewstudentcompany/" component={Viewstdcompany} />
      <Route path="/companysignup/" component={Signupcompany} />
      <Route path="/adminsignup/" component={Signupadmin} />
      <Route path="/studentsignup/" component={Signupstudent} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
