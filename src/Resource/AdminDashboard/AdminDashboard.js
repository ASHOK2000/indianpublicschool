import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./SubPages/listItems";
import "../../css/dashboard.admin.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserProfile from "../UserProfile";
import Fees from "./FeesSubmit";
import TeacherList from "./TeacherList";
import AdmissionRequest from "./AdmissionRequest";
import Exam from "./Exam";
import NotFound from "../../CommonService/NotFound";
import ChangePassword from "../ChangePassword";
import TeacherRegistration from "./SubPages/TeacherRegistration";
import NoticePost from "./SubPages/NoticePostForm";
import Announcement from "./Announcement";
import AdmissionForm from "./SubPages/AdmissionForm";
import DashboardPage from "./DashboardGraphs";
import "../../css/adminPanel.css";
import ClassCard from "./Class";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import CommonService from "../../CommonService/CommonService";
import { LockOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminDashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileMenu = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    setAnchorEl(null);
    navigate("/");
    window.location.reload();
  };

  const handleChangePassword = () => {
    setAnchorEl(null);
    navigate("/changePassword");
  };
  const handleProfile = async () => {
    setAnchorEl(null);
    const userProfileData = await CommonService.findByTokenDetails("user");
    console.log(userProfileData, "notice by Id");

    navigate("/Profile", {
      state: { userProfileData },
    });
  };

  const storedData = JSON.parse(localStorage.getItem("userData"));
  const FirstName = storedData.payload.firstName;
  console.log(FirstName, "First Name");
  const firstCharacter = FirstName.charAt(0); // This will get the first character 'A'

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            // style={{ backgroundColor: "white", boxShadow: "none" }}
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}>
              {/* <MenuIcon /> */}
              <span class="dot"></span>
              <span class="dot1"></span>
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}>
              Indian Public School
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* this is Profile Icons and control */}
            <div class="dropdown" style={{ margin: "8px", color: "#f0f0f0f" }}>
              <button class="profile-icon" onClick={handleClick}>
                {firstCharacter.toUpperCase()}
              </button>
              {/* card will show on Profile Icon Hover */}
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openProfileMenu}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <MenuItem onClick={handleProfile}>
                  <Avatar fontSize="small" /> Profile
                </MenuItem>
                <MenuItem onClick={handleChangePassword}>
                  <LockOutlined fontSize="small" /> &nbsp;Change Password
                </MenuItem>
                {/* <Divider /> */}

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>{" "}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
            style={{
              backgroundColor: "#7FC7D9",
              color: "#0F1035",
              fontWeight: "600",
            }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            style={{
              backgroundColor: "#7FC7D9",
              color: "#0F1035",
              fontWeight: "600",
            }}>
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Toolbar />
          <div>
            <Routes>
              <Route path="/admin/dashboard" element={<DashboardPage />} />
              <Route path="/admin/fees" element={<Fees />}></Route>
              <Route path="/admin/admissionForm" element={<AdmissionForm />} />
              <Route
                path="/admin/admissionRequest"
                element={<AdmissionRequest />}
              />
              <Route path="/admin/TeacherList" element={<TeacherList />} />
              <Route path="/admin/TeacherList" element={<TeacherList />} />
              <Route path="/admin/exam" element={<Exam />} />
              <Route path="/admin/quiz" element={<NotFound />} />
              <Route path="/admin/quiz" element={<NotFound />} />
              <Route path="/admin/notice" element={<Announcement />} />
              <Route path="/admin/notice-post" element={<NoticePost />} />
              <Route
                path="/admin/register-teacher"
                element={<TeacherRegistration />}
              />
              <Route path="/admin/class" element={<ClassCard />} />
              <Route path="/Profile" element={<UserProfile />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/admin/testPath" element={NotFound} />
            </Routes>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
