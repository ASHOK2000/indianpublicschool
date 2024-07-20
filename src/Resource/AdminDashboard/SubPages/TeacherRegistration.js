import React, { useState, useRef, useEffect } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MDBRadio } from "mdb-react-ui-kit";
import CommonService from "../../../CommonService/CommonService";
import { useLocation, useNavigate } from "react-router-dom";

const registrationData = {
  firstName: "",
  lastName: "",
  email: "",
  flatDoorBlock: "",
  locality: "",
  city: "",
  state: "Madhya Pradesh",
  gender: "",
  contact: "",
  alternateContact: "",
  category: "",
  samagraId: "",
  salary: "",
  bankName: "",
  bankAccountNo: "",
  ifscCode: "",
  dateOfBirth: "",
  qualification: "",
  passingYear: "",
  board: "",
  resultPercentage: "",
  schoolName: "",
  yearOfExperience: "",
  role: "",
  panCard: "",
};

export default function TeacherRegistration() {
  const [formValue, setFormValue] = useState(registrationData);

  const formRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  useEffect(() => {
    if (location.state && location.state.findTeacherById) {
      console.log("data", location.state.findTeacherById);
      setFormValue(location.state.findTeacherById);
    }
  }, [location.state]);
  const isEditMode = !!location.state?.findTeacherById;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isEditMode) {
        console.log(formValue);

        const response = await CommonService.create("teacher", formValue);
        if (response) {
          alert("teacher registration Success");
          formRef.current.reset();
          setFormValue(registrationData);
        }
      } else {
        const UpdateUser = await CommonService.update(
          "teacher",
          formValue.uuid,
          formValue
        );
        formRef.current.reset();
        setFormValue(registrationData);
        navigate("/admin/teacherList");
      }
    } catch (error) {
      console.error(error, "Teacher registration Error");
      setTimeout(() => {
        alert("Teacher registration Error ");
      }, 2000);
    }
  };

  return (
    <Container>
      <div className="noticeHeading">
        <h3>Teacher Registration</h3>
      </div>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow" style={{ backgroundColor: "#ded7d7f0" }}>
            <Card.Body>
              <div
                style={{
                  backgroundColor: "#ededed",
                  padding: "15px",
                  borderRadius: "15px",
                }}>
                <p>
                  Please follow the instructions below to complete the form:
                </p>
                <ul>
                  <li>
                    Provide accurate and complete information for all the //
                    required fields.
                  </li>
                  <li>
                    Fields marked with an asterisk (*) are mandatory; ensure
                    they are filled.
                  </li>

                  <li>
                    Select your preferences carefully, such as gender, subjects,
                    etc.
                  </li>
                </ul>
              </div>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <MDBRow className="g-3 mt-5">
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.firstName}
                      name="firstName"
                      onChange={onChange}
                      id="validationCustom01"
                      required
                      label="First name *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.lastName}
                      name="lastName"
                      onChange={onChange}
                      id="validationCustom02"
                      required
                      label="Last name *"
                    />
                  </MDBCol>
                  <div key={"inline-radio"} className="mb-3">
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio1"
                      value="male"
                      label="Male"
                      onChange={onChange}
                      inline
                    />
                    <MDBRadio
                      name="inlineRadio"
                      id="inlineRadio2"
                      value="female"
                      label="Female"
                      onChange={onChange}
                      inline
                    />
                  </div>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.category}
                      name="category"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Category *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      type="date"
                      value={formValue.dateOfBirth}
                      name="dateOfBirth"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Date Of Birth *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      pattern="\d{10}"
                      maxLength="10"
                      value={formValue.contact}
                      name="contact"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Contact *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      pattern="\d{10}"
                      maxLength="10"
                      value={formValue.alternateContact}
                      name="alternateContact"
                      onChange={onChange}
                      id="validationCustom05"
                      label="Alternate Contact"
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      value={formValue.email}
                      name="email"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Email *"
                    />
                  </MDBCol>
                  {/* <div className="border border-2 border-text-secondary"></div> */}
                  <MDBCol md="6">
                    <MDBInput
                      pattern="\d{12}"
                      maxLength="12"
                      value={formValue.aadhar}
                      name="aadhar"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Aadhar *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      pattern="\d{9}"
                      maxLength="9"
                      value={formValue.samagraId}
                      name="samagraId"
                      onChange={onChange}
                      id="validationCustom03"
                      label="Samagra *"
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      maxLength="10"
                      value={formValue.panCard.toUpperCase()}
                      name="panCard"
                      onChange={onChange}
                      id="validationCustom03"
                      label="Pan Card"
                      placeholder="ABCDE1234F"
                    />
                  </MDBCol>
                  <div className="border border-2 border-text-secondary"></div>
                  <MDBCol md="6">
                    <MDBInput
                      // pattern="\d{5}"
                      maxLength="5"
                      value={formValue.salary}
                      name="salary"
                      onChange={onChange}
                      id="validationCustom03"
                      label="salary"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.bankAccountNo}
                      name="bankAccountNo"
                      onChange={onChange}
                      id="validationCustom03"
                      label="bankAccountNo"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.ifscCode}
                      name="ifscCode"
                      onChange={onChange}
                      id="validationCustom05"
                      label="ifscCode"
                    />
                  </MDBCol>{" "}
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.bankName}
                      name="bankName"
                      onChange={onChange}
                      id="validationCustom05"
                      label="Branch Name"
                    />
                  </MDBCol>
                  <div className="border border-2 border-text-secondary"></div>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.role}
                      name="role"
                      onChange={onChange}
                      id="validationCustom03"
                      label="Job Role"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.yearOfExperience}
                      name="yearOfExperience"
                      onChange={onChange}
                      id="validationCustom03"
                      label="Year Of Experience"
                    />
                  </MDBCol>
                  <div className="border border-2 border-text-secondary"></div>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.qualification}
                      name="qualification"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="qualification *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      pattern="\d{4}"
                      maxLength="4"
                      value={formValue.passingYear}
                      name="passingYear"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="passing Year *"
                    />
                  </MDBCol>
                  <MDBCol md="16">
                    <MDBInput
                      value={formValue.schoolName}
                      name="schoolName"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="School / College  *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.board}
                      name="board"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="Board / University *"
                    />
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBInput
                      value={formValue.resultPercentage}
                      name="resultPercentage"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="Percentage / CGPA *"
                    />
                  </MDBCol>
                  <div className="border border-2 border-text-secondary"></div>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.flatDoorBlock}
                      name="flatDoorBlock"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Floor / Block *"
                    />
                  </MDBCol>{" "}
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.locality}
                      name="locality"
                      onChange={onChange}
                      id="validationCustom03"
                      label="locality"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.city}
                      name="city"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="City *"
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBInput
                      value={formValue.state}
                      name="state"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="state *"
                    />
                  </MDBCol>{" "}
                  <MDBCol md="12">
                    <MDBInput
                      pattern="\d{6}"
                      maxLength="6"
                      value={formValue.zip}
                      name="zip"
                      onChange={onChange}
                      id="validationCustom05"
                      required
                      label="Zip *"
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBCheckbox
                      label="Agree to terms and conditions"
                      id="invalidCheck2"
                      required
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="submit">Register</MDBBtn>
                  </MDBCol>
                </MDBRow>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
