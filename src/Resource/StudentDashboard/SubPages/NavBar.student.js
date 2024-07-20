import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logoImage from "../../../res_images/ips_logo.png";
import Image from "react-bootstrap/Image";
import "../../css/studentIconMenu.css";
import Container from "react-bootstrap/Container";
import StudentProfileService from "./student.ImageDrop";
import { Link, useNavigate } from "react-router-dom";
import CommonService from "../../../CommonService/CommonService";

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "/student/dashboard" },
  { title: "About", link: "" },
  { title: "Contact", link: "" },
];

function StudentNavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfileMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

    navigate("/Profile-view", {
      state: { userProfileData },
    });
  };

  const storedData = JSON.parse(localStorage.getItem("userData"));
  const FirstName = storedData.payload.firstName;
  const firstCharacter = FirstName.charAt(0); // This will get the first character 'A'

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div className="  justify-content-center align-items-center h4">
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography variant="h6" style={{ fontWeight: "600" }} sx={{ my: 2 }}>
          <p>Indian Public School</p>
        </Typography>
        <Divider />

        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to="/student/dashboard">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              onClick={handleProfile}>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              onClick={handleChangePassword}>
              <ListItemText primary="Forget Password" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              onClick={handleLogout}>
              <ListItemText primary="logout" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleClose}
              sx={{ textAlign: "center" }}
              component={Link}>
              <ListItemText primary="Close" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <div className="navbar_logo-student">
                <Link to="/student/dashboard">
                  <Image
                    src={logoImage}
                    alt="indian Public school"
                    className="navbar_logo-student"
                  />
                </Link>
              </div>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))} */}
              <StudentProfileService />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default StudentNavBar;
