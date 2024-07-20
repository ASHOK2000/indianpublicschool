import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Feedback, LoginOutlined } from "@mui/icons-material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/admin/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/fees">
      <ListItemIcon>
        <CurrencyRupeeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Fees" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/admissionForm">
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Admission" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/admissionRequest">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Admission Request" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/teacherList">
      <ListItemIcon>
        <PersonPinOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Faculty" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/exam">
      <ListItemIcon>
        <TaskOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Exam" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/notice">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Announcement" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/class">
      <ListItemIcon>
        <ClassOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Class" />
    </ListItemButton>

    <ListItemButton disabled={true} component={Link} to="/admin/quiz">
      <ListItemIcon>
        <QuizOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItemButton>

    <ListItemButton disabled={true} component={Link} to="/admin/attendance">
      <ListItemIcon>
        <EventAvailableOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
    </ListItemButton>

    <ListItemButton disabled={true} component={Link} to="/admin/feedback">
      <ListItemIcon>
        <Feedback />
      </ListItemIcon>
      <ListItemText primary="FeedBack" />
    </ListItemButton>

    <ListItemButton component={Link} to="/admin/testPath">
      <ListItemIcon>
        <LoginOutlined />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end Collection" />
    </ListItemButton> */}
  </React.Fragment>
);
