import React, { useState, useRef, useEffect } from "react";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CommonService from "../CommonService/CommonService";
import { SearchOutlined } from "@mui/icons-material";

const registrationData = {
  unique_id: "",
  dateOfBirth: "",
  aadhar: "",
};
const PasswordData = {
  unique_id: "",
  aadhar: "",
  password: "",
  confirmPassword: "",
};
export default function StudentLoginCreation() {
  const [formValue, setFormValue] = useState(registrationData);
  const [Passwords, SetPassword] = useState(PasswordData);
  const [userData, setUserData] = useState({});
  const [isData, setIsData] = useState(false);

  const formRef = useRef(null);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };
  const onChangePassword = (e) => {
    const { name, value } = e.target;
    SetPassword((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  //   useEffect(() => {
  //     if (true) {
  //       setFormValue("hello");
  //     }
  //   }, [formValue]);

  // submit the student details
  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      if (true) {
        const getStudentDetails = await CommonService.find(
          "user/createLogin",
          formValue
        );
        if (getStudentDetails.statusCode !== 900) {
          alert("teacher registration Success");
          //   formRef.current.reset();
          setUserData(getStudentDetails);
          SetPassword({
            unique_id: getStudentDetails.unique_id,
            aadhar: getStudentDetails.aadhar,
          });
          setIsData(true);
        } else {
          alert(getStudentDetails.errorMessage);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Passwords.password === Passwords.confirmPassword) {
        const response = await CommonService.update(
          "user/passwordSetup",
          "",
          Passwords
        );
        if (response.statusCode === 200) {
          alert("teacher registration Success");
          formRef.current.reset();
          setFormValue(registrationData);
          setUserData(null);
        }
      } else {
        alert("password does not match");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const isPasswordMatch = formValue.newPassword === formValue.confirmPassword;

  return (
    <Container style={{ minHeight: "40rem" }}>
      <Row className="d-flex mt-5 justify-content-center align-items-center">
        <Col md={7}>
          <MDBRow
            style={{ backgroundColor: "#365486", color: "#f0f0f0" }}
            className="justify-content-center align-items-center rounded p-1 h4">
            Student Login Creation
          </MDBRow>
          <Card
            className="shadow"
            style={{ backgroundColor: "#ded7d7f0", padding: "15px" }}>
            <Form ref={formRef} onSubmit={handleDataSubmit}>
              <MDBRow className="g-3 mt-5">
                <MDBCol md="12">
                  <MDBInput
                    value={formValue.unique_id}
                    name="unique_id"
                    onChange={onChange}
                    id="validationCustom01"
                    required
                    label="Student Id *"
                  />
                </MDBCol>
                <MDBCol md="12">
                  <MDBInput
                    type="date"
                    value={formValue.dateOfBirth}
                    name="dateOfBirth"
                    onChange={onChange}
                    id="validationCustom02"
                    required
                    label="Date Of Birth *"
                  />
                </MDBCol>
                <MDBCol md="10">
                  <MDBInput
                    value={formValue.aadhar}
                    name="aadhar"
                    onChange={onChange}
                    id="validationCustom02"
                    required
                    label="Aadhar No.*"
                  />
                </MDBCol>
                <MDBCol md="2">
                  <Button type="submit">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <SearchOutlined />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </Button>{" "}
                </MDBCol>
                <MDBCol md="3"></MDBCol>
              </MDBRow>
            </Form>
            {/* userInfo */}
            {isData && (
              <div>
                <MDBCol md="12">
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
                          <MDBCardText>Father Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userData.fatherName}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Class</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userData.classDetails.name}{" "}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Date Of Birth</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                            {userData.dateOfBirth}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Student Id</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText>{userData.unique_id}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                  <p className="text-muted">
                    * Set your password if the above details match; otherwise,
                    please contact your admission cell for assistance.
                  </p>
                </MDBCol>
                {/*endInfo*/}
                <Form ref={formRef} onSubmit={handlePasswordSubmit}>
                  <MDBRow className="g-3 mt-2">
                    <MDBCol md="10">
                      <MDBInput
                        value={formValue.password}
                        name="password"
                        onChange={onChangePassword}
                        id="validationCustom02"
                        required
                        label="New Password"
                      />
                    </MDBCol>
                    <MDBCol md="10">
                      <MDBInput
                        type="password"
                        value={formValue.confirmPassword}
                        name="confirmPassword"
                        onChange={onChangePassword}
                        id="validationCustom02"
                        required
                        label="Confirm Password"
                        className={isPasswordMatch ? "is-valid" : "is-invalid"}
                      />
                      {!isPasswordMatch && (
                        <div className="invalid-feedback">
                          Passwords do not match
                        </div>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <MDBCol md="5"></MDBCol>
                  <MDBCol md="4" className="mt-2 mb-4 ml-5">
                    <Button type="submit">Create Login </Button>{" "}
                  </MDBCol>
                </Form>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
