import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import logoImage from "../res_images/ips_logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    navigate("/");
  };

  const storedData = localStorage.getItem("userData");
  const userData = JSON.parse(storedData);
  let content;
  if (userData !== null) {
    content = (
      <Nav.Link className="navLinkText" onClick={handleLogout}>
        LOGOUT
      </Nav.Link>
    );
  } else {
    content = (
      <Nav.Link className="navLinkText" onClick={handleLogout}>
        JOIN
      </Nav.Link>
    );
  }

  return (
    <div className="navStyle">
      <Container>
        <Navbar expand="lg">
          <div className="navImage">
            {/* {localStorage.clear()} */}
            <Navbar.Brand href="/indianpublicschool">
              <div className="navbar_logo">
                <Image
                  src={logoImage}
                  alt="indian Public school"
                  className="navbar_logo"
                />
              </div>
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls=" " />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="nav_link  justify-content-end nav_links">
            <Nav className="">
              <LinkContainer to="/indianpublicschool">
                <Nav.Link className="navLinkText">HOME</Nav.Link>
              </LinkContainer>

              <div className="about-dropdown">
                <NavDropdown
                  title="ABOUT"
                  renderMenuOnMount={true}
                  className="navLinkText">
                  <div className="navStyle navCard ">
                    <LinkContainer to="/whyIPS">
                      <Nav.Link className="navLinkText">WHY&nbsp;Us! </Nav.Link>
                    </LinkContainer>
                    <NavDropdown.Divider />

                    <LinkContainer to="/About">
                      <Nav.Link className="navLinkText">
                        ChairMan's&nbsp;Massage{" "}
                      </Nav.Link>
                    </LinkContainer>

                    <NavDropdown.Divider />
                    {/* /transportPolicy */}
                    <LinkContainer to="/TransPort">
                      <Nav.Link className="navLinkText">
                        Transport Policy{" "}
                      </Nav.Link>
                    </LinkContainer>

                    <NavDropdown.Divider />
                    <LinkContainer
                      to="/blogs"
                      className="navLinkText"
                      target="blank">
                      <Nav.Link>Blogs</Nav.Link>
                    </LinkContainer>
                  </div>
                </NavDropdown>
              </div>

              {/* <LinkContainer to="/whyIPS">
              <Nav.Link className = "navLinkText">WHY US </Nav.Link>
            </LinkContainer> */}

              {/* <LinkContainer to="/alumni">
                <Nav.Link className="navLinkText">ALUMNI</Nav.Link>
              </LinkContainer> */}

              <LinkContainer to="/admisson">
                <Nav.Link className="navLinkText">ADMISSON</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/student/careers">
                <Nav.Link className="navLinkText">CAREERS</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact-us">
                <Nav.Link className="navLinkText">CONTACT US</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/location">
                <Nav.Link className="navLinkText">LOCATION</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">{content}</LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
