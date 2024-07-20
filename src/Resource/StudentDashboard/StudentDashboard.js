import React from "react";
import Container from "react-bootstrap/Container";

import "../css/studentIconMenu.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile";
import ChangePassword from "../ChangePassword";
import NotFound from "../../CommonService/NotFound";
import StudentFees from "./Student.fees";
import Directory from "./Directory";
import DrawerAppBar from "./SubPages/NavBar.student";
import StudentServices from "./StudentServices";
import StudentNavBar from "./SubPages/NavBar.student";
import StudentProfilePage from "./StudentProfile";
import MarksheetTracker from "./marksheetTracker";
import PeriodSchedule from "./student.periodSchudule";
import StudentExam from "./student.exams";

function StudentDashboard() {
  return (
    <Container>
      <StudentNavBar />
      <div>
        <Routes>
          <Route path="/student/dashboard" element={<StudentServices />} />
          <Route path="/student/fees" element={<StudentFees />} />
          <Route path="/Profile-view" element={<UserProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/student/directory" element={<Directory />} />
          <Route path="/student/marksheet" element={NotFound} />
          <Route path="/student/testPath" element={<DrawerAppBar />} />
          <Route
            path="/student/home-profile"
            element={<StudentProfilePage />}
          />
          <Route path="/student/class-schedule" element={<PeriodSchedule />} />{" "}
          <Route
            path="/student/marksheet-tracker"
            element={<MarksheetTracker />}
          />
          <Route path="/student/exams" element={<StudentExam />} />
        </Routes>
      </div>
    </Container>
  );
}

export default StudentDashboard;
