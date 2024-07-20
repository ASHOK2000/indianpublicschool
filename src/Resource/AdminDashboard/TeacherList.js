import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import CommonService from "../../CommonService/CommonService";
import PeopleIcon from "@mui/icons-material/People";
import cardSkeleton from "./../../Loaders/CardSkeleton";
import DeleteIcon from "@mui/icons-material/Delete";

const teacherRequest = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  uuid: "",
  unique_id: "",
  created_date: Date,
};

const TeacherList = () => {
  const [teacherData, setTeacherData] = useState(teacherRequest);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data on page load
    fetchTeacherDataOnPageLoad();
  }, []);

  const fetchUser = async (uuid) => {
    const fetchUSerData = await CommonService.findById("teacher", uuid);
  };

  const fetchTeacherDataOnPageLoad = async () => {
    try {
      const data = await CommonService.findAll("teacher"); // Adjust the endpoint
      setTeacherData(data);
    } catch (error) {
      setTeacherData(teacherData);
      console.error("Error fetching data:", error);
    }
  };
  async function TeacherProfile(uuid) {
    try {
      const userProfileData = await CommonService.findById("teacher", uuid);
      navigate("/Profile", { state: { userProfileData } });
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  }
  async function DeleteTeacher(uuid) {
    try {
      const DeleteTeacher = await CommonService.delete("teacher", uuid);
      if (DeleteTeacher) {
        alert("Student deleted");
      }
    } catch (error) {
      console.error(error, "Error deleting Student");
    }
  }

  async function updateTeacher(uuid) {
    try {
      const findTeacherById = await CommonService.findById("teacher", uuid);
      navigate("/admin/register-teacher", {
        state: { findTeacherById },
      });
    } catch (error) {
      console.log(error, "Error fetching");
    }
  }

  return (
    <div>
      <div className="noticeHeading">
        <h3>Faculty !</h3>
      </div>
      <section className="vh-100" style={{ backgroundColor: "#ffffff" }}>
        <div className="searchbar">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}>
            <p>{/* <SearchBox collectionName={"admissionRequest"} /> */}</p>
            <div>
              <Button
                component={Link}
                to="/admin/register-teacher"
                variant="contained"
                onClick={() => {}}
                startIcon={<AddIcon />}>
                Add Teacher
              </Button>
            </div>
          </Box>
        </div>

        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center  h-100 text-center">
            {teacherData && teacherData.results ? (
              teacherData.results.map((item, index) => (
                <MDBCol size="md-4" key={index}>
                  <MDBCard
                    className="mb-5"
                    style={{
                      borderRadius: "15px",
                      alignItems: "center",
                      maxWidth: "20rem",
                      color: "#596FB7",
                    }}>
                    <MDBCardBody className="p-4">
                      <Link
                        to="/Profile"
                        onClick={fetchUser}
                        className="link-primary">
                        <MDBTypography tag="h3">
                          {item.firstName.toUpperCase()}{" "}
                          {item.lastName.toUpperCase()}
                        </MDBTypography>
                        <MDBCardText className="large me-3">
                          <MDBTypography tag="h6">
                            <div class="row justify-content-start">
                              <div class="col-7">{item.unique_id}</div>
                              <div class="col-5">{item.contact}</div>
                            </div>
                          </MDBTypography>
                          {/* <div class="row justify-content-start ">
                            <div class="col-9">{item.email}</div>
                            <div class="col-3"></div>
                          </div> */}
                        </MDBCardText>
                      </Link>
                      <hr className="my-4" />
                      {/* Add your inner components here */}
                      <div
                        className=" row justify-content-between "
                        style={{ color: "#C6CF9B" }}>
                        <div className="text-uppercase col-4">
                          <Link
                            to="/Profile"
                            className="btn btn-outline-success"
                            role="button"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark">
                            <PeopleIcon
                              onClick={() => TeacherProfile(item.uuid)}
                            />
                          </Link>
                        </div>
                        {/* update  teacher */}
                        <div className="text-uppercase col-4">
                          <button
                            component={Link}
                            to="/Profile"
                            type="button"
                            class="btn btn-outline-success"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark">
                            <EditIcon
                              onClick={() => updateTeacher(item.uuid)}
                            />
                          </button>
                        </div>
                        <div className="text-uppercase col-4">
                          <Link
                            className="btn btn-outline-success"
                            role="button"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="dark">
                            <DeleteIcon
                              onClick={() => DeleteTeacher(item.uuid)}
                            />
                            {/* Action&nbsp; */}
                          </Link>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
            ) : (
              <cardSkeleton />
            )}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default TeacherList;
