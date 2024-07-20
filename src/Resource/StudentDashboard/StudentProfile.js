import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import ProfileImage from "../../res_images/man.png";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Link, useNavigate } from "react-router-dom";
import CommonService from "../../CommonService/CommonService";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
export default function StudentProfilePage() {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfileData = await CommonService.findByTokenDetails("user");
        setUserData(userProfileData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {};
  }, []);

  const handleProfile = async () => {
    const userProfileData = await CommonService.findByTokenDetails("user");
    navigate("/Profile-view", {
      state: { userProfileData },
    });
  };
  return (
    <div className="gradient-custom-2  shadow p-1 mb-1 bg-white rounded ">
      <MDBRow
        style={{ backgroundColor: "#365486", color: "#f0f0f0" }}
        className="justify-content-center align-items-center rounded p-1 h4">
        Profile
      </MDBRow>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="d-flex justify-content-end text-center py-1">
            <div>
              <MDBCardText className="mb-1 h5">253</MDBCardText>
              <MDBCardText className="small text-muted mb-0">Class</MDBCardText>
            </div>
            <div className="px-3">
              <MDBCardText className="mb-1 h5">A</MDBCardText>
              <MDBCardText className="small text-muted mb-0">
                Section
              </MDBCardText>
            </div>
            {/* <div>
              <MDBCardText className="mb-1 h5">478</MDBCardText>
              <MDBCardText className="small text-muted mb-0">
                Following
              </MDBCardText>
            </div> */}
          </div>
        </div>

        <MDBContainer className="py-5">
          {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={ProfileImage}
                    alt="avatar"
                    //   className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">
                    {userData.firstName}&nbsp;
                    {userData.lastName}
                  </p>
                  <p className="text-muted mb-4">{userData.locality}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <div className="text-uppercase col-4">
                      <button
                        component={Link}
                        to="/Profile"
                        type="button"
                        class="btn btn-outline-success "
                        data-mdb-ripple-init
                        data-mdb-ripple-color="dark">
                        <EditIcon />
                        update
                        {/* 

                       onClick={() => updateTeacher(item.uuid)} /> */}
                      </button>
                    </div>
                    <div className="text-uppercase col-4">
                      <button
                        component={Link}
                        to="/Profile"
                        type="button"
                        class="btn btn-outline-success "
                        data-mdb-ripple-init
                        onClick={handleProfile}
                        data-mdb-ripple-color="dark">
                        <VisibilityIcon />
                        &nbsp; View
                        {/* 
                       onClick={() => updateTeacher(item.uuid)} /> */}
                      </button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <LanguageIcon /> <MDBCardText>N/A</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <GitHub style={{ color: "#333333" }} />
                      <MDBCardText>N/A</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <Twitter style={{ color: "#55acee" }} />
                      <MDBCardText>N/A</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <Instagram style={{ color: "#ac2bac" }} />
                      <MDBCardText>N/A</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <Facebook style={{ color: "#3b5998" }} />
                      <MDBCardText>N/A</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.firstName}&nbsp;
                        {userData.lastName}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.contact}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.alternateContact}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userData.locality}&nbsp;{userData.state}&nbsp;
                        {userData.city}&nbsp; India
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0 justify-content-center align-items-center">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1 h4">
                          My Subjects
                        </span>{" "}
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: "1rem" }}>
                        Web Design
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: "1rem" }}>
                        Website Markup
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: "1rem" }}>
                        One Page
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: "1rem" }}>
                        Mobile Template
                      </MDBCardText>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: "1rem" }}>
                        Backend API
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0 justify-content-center align-items-center">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1 h4">
                          Class Teacher
                        </span>{" "}
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: "1rem" }}>
                        Web Design
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}
