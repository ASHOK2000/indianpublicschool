import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import { LockOutlined } from "@mui/icons-material";
import "../../css/studentIconMenu.css";
import { useNavigate } from "react-router-dom";
import CommonService from "../../../CommonService/CommonService";

export default function StudentProfileService() {
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

  return (
    <Container fluid>
      <Nav className="justify-content-end ">
        {/* this is Profile Icons and control */}
        <div class="dropdown" style={{ color: "#0e0d0d" }}>
          <button class="profile-icon-student" onClick={handleClick}>
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
                  width: 36,
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
            anchorOrigin={{
              horizontal: "right",
              vertical: "bottom",
            }}>
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
      </Nav>
    </Container>
  );
}
export function itemList() {}
