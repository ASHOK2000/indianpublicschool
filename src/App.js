import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Alumni from "./Resource/Alumni";
import Career from "./Resource/Careers";
import Login from "./Resource/Login";
import WhyUs from "./Resource/Why-us";
import Admisson from "./Resource/Admisson";
import Home from "./Resource/Home";
import Location from "./Resource/Location";
import About from "./Resource/About";
import Contact from "./Resource/Contact-us";
import TermsCondition from "./Resource/sub-pages/TermsCondition";
import "./App.css";
import Footer from "./Resource/Footer";
import NavBar from "./Resource/NavBar";
import AdminDashboard from "./Resource/AdminDashboard/AdminDashboard";
import StudentDashboard from "./Resource/StudentDashboard/StudentDashboard";
import StudentServices from "./Resource/StudentDashboard/StudentServices";
import UserProfile from "./Resource/UserProfile";
import Blogs from "./Resource/About_sub_pages/blogs";
import FormPasswordReset from "./Resource/ChangePassword";
import AdmissionRequest from "./Resource/AdminDashboard/AdmissionRequest";
import StudentLoginCreation from "./Resource/StudentLoginCreation";

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState("");
  const [studentLoggedIn, setStudentLoggedIn] = useState("");
  const [notLoggedIn, setNotLoggedIn] = useState("");
  let Role;

  const storedData = localStorage.getItem("userData");
  console.log(storedData, "stored in localStorage");
  if (storedData) {
    const userData = JSON.parse(storedData);
    Role = userData.payload.role;
  }

  useEffect(() => {
    if (Role === "Admin") {
      setAdminLoggedIn(true);
      setNotLoggedIn(false);
    } else if (Role === "Student") {
      setStudentLoggedIn(true);
      setNotLoggedIn(false);
    } else {
      setNotLoggedIn(true);
    }
  }, [Role]);

  return (
    <div>
      <Router>
        {studentLoggedIn && <StudentDashboard />}
        {/* {!adminLoggedIn && !studentLoggedIn && <NavBar />} */}
        {notLoggedIn && <NavBar />}
        {/* <StudentServices /> */}
        {adminLoggedIn && <AdminDashboard />}
        <Routes>
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="/student/dashboard" element={<StudentDashboard />} /> */}
          {notLoggedIn && <Route path="/" element={<Home></Home>}></Route>}

          <Route path="/About" element={<About />}></Route>
          <Route path="/admisson" element={<Admisson></Admisson>}></Route>
          <Route path="/alumni" element={<Alumni></Alumni>}></Route>
          <Route path="/student/careers" element={<Career></Career>}></Route>
          <Route path="/contact-us" element={<Contact></Contact>}></Route>
          <Route path="/location" element={<Location></Location>}></Route>
          <Route path="/whyIPS" element={<WhyUs></WhyUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/student-login-create"
            element={<StudentLoginCreation></StudentLoginCreation>}></Route>
          {/* <Route path="/pricing" element={<Login></Login>}></Route> */}
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/resetPassword"
            element={<FormPasswordReset></FormPasswordReset>}></Route>

          {/* <Route path="/profile" element={<UserProfile></UserProfile>}></Route> */}
          {/* <Route
            path="/admin/admissionForm"
            element={<AdmissionForm />}></Route> */}
          <Route
            path="/student/StudentServices"
            element={<StudentServices></StudentServices>}></Route>
          <Route path="admissionRequest" component={AdmissionRequest} />

          <Route
            path="/terms-condition"
            element={<TermsCondition></TermsCondition>}></Route>
        </Routes>
        <div>{notLoggedIn && <Footer />}</div>
      </Router>
    </div>
  );
}

export default App;
