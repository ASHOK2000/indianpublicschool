import * as formik from "formik";
import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../../../css/admissionForm.admin.css";
import { Card, Container } from "react-bootstrap";
import * as yup from "yup";
import CommonService from "../../../CommonService/CommonService";
import { useLocation, useNavigate } from "react-router-dom";

const userSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string(),
  gender: yup.string(),
  userId: yup.string(),
  mobileNumber: yup.string(),
  alternateContact: yup.string(),
  role: yup.string(),
  category: yup.string(),
  samagraId: yup.string(),
  bloodGroup: yup.string(),
  religion: yup.string(),
  nationality: yup.string(),
  classId: yup.string(),
  studentId: yup.string(),
  contact: yup.string(),
  uid: yup.string(),
  bankAccountNo: yup.string(),
  familyAnnualIncome: yup.string(),
  enrollmentNo: yup.string(),
  disabilityType: yup.string(),
  fees: yup.number(),
  disabilityPercentage: yup.string(),
  password: yup.string(),
  state: yup.string(),
  birthDate: yup.string(),
  zip: yup.number(),
  discount: yup.number(),
  ParentContact1: yup.number(),
  ParentContact2: yup.number(),
  fatherName: yup.string(),
  occupationFather: yup.string(),
  motherName: yup.string(),
  occupationMother: yup.string(),
  familyId: yup.string(),
  bankName: yup.string(),
  ifscCode: yup.string(),

  flatDoorBlock: yup.string(),
  village: yup.string(),
  postOffice: yup.string(),
  locality: yup.string(),
  city: yup.string(),

  qualification: yup.string(),
  passingYear: yup.string(),
  board: yup.string(),
  marks: yup.number(),
  resultPercentage: yup.string(),
  schoolName: yup.string(),

  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  contact: "",
  alternateContact: "",
  category: "",
  samagraId: "",
  bloodGroup: "",
  religion: "",
  nationality: "",
  classId: "",
  bankName: "",
  bankAccountNo: "",
  ifscCode: "",
  birthDate: "",

  familyAnnualIncome: "",
  enrollmentNo: "",
  disabilityType: "",
  fees: 0,
  total: "",
  discount: 0,
  disabilityPercentage: "",
  password: "",
  ParentContact1: "",
  ParentContact2: "",
  fatherName: "",
  occupationFather: "",
  motherName: "",
  occupationMother: "",
  familyId: "",

  flatDoorBlock: "",
  locality: "",
  city: "",
  state: "",
  zip: "",

  qualification: "",
  passingYear: "",
  board: "",
  marks: "",
  resultPercentage: "",
  schoolName: "",
  prevClass: "",

  terms: false,
};

function AdmissionForm() {
  const [loader, setLoader] = useState(false);
  const [selectedClass, setSelectedClass] = useState();
  const [formValue, setFormValue] = useState(initialValues);
  const [classData, setClassData] = useState(null);

  const formRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const classes = await CommonService.findAll("classes");
      setClassData(classes.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const activeLoader = () => {
    setLoader(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
  };
  useEffect(() => {
    if (location.state && location.state.findStudentById) {
      setFormValue(location.state.findStudentById);
    }
  }, [location.state]);
  const isEditMode = !!location.state?.findStudentById;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      if (!isEditMode) {
        const response = await CommonService.create("user", formValue);
        if (response) {
          alert("User registration Success");
          formRef.current.reset();
          setFormValue(response);
        }
      } else {
        const UpdateUser = await CommonService.update(
          "user",
          formValue.uuid,
          formValue
        );
        formRef.current.reset();
        setFormValue(initialValues);
        navigate("/admin/class");
      }
    } catch (error) {
      console.error(error, "User registration Error");
      setTimeout(() => {
        alert("User registration Error ");
      }, 2000);
    }
  };

  const { Formik } = formik;

  return (
    <Formik validationSchema={userSchema} initialValues>
      {({ touched, errors }) => (
        <Container>
          <div className="noticeHeading">
            <h3>Student Registration</h3>
          </div>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={10} lg={8} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow" style={{ backgroundColor: "#ded7d7f0" }}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <div className="PersonalDetails">
                    <h3>Personal Details</h3>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formValue.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formValue.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik03">
                        <Form.Label>Birth Date</Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="date"
                            placeholder="Date Of Birth"
                            name="birthDate"
                            value={formValue.birthDate}
                            onChange={handleChange}
                            isInvalid={!!errors.birthDate}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.birthDate}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik04">
                        <Form.Label>Gender</Form.Label>
                        <div key="inline-radio" className="mb-3">
                          <Form.Check
                            inline
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            checked={formValue.gender === "male"}
                            onChange={handleChange}
                            id={`inline-radio-1`}
                          />
                          <Form.Check
                            inline
                            label="Female"
                            value="female"
                            onChange={handleChange}
                            checked={formValue.gender === "female"}
                            name="gender"
                            type="radio"
                            id={`inline-radio-2`}
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik05">
                        <Form.Label>Class</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          id="classSelect"
                          value={formValue.classId}
                          name="classId"
                          onChange={handleChange}>
                          <option value="">Select...</option>
                          {classData &&
                            classData.map((item) => (
                              <option key={item.uuid} value={item.uuid}>
                                {item.name}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik06">
                        <Form.Label>Samagra Id</Form.Label>
                        <Form.Control
                          pattern="\d{9}"
                          maxLength="9"
                          type="text"
                          name="samagraId"
                          value={formValue.samagraId}
                          onChange={handleChange}
                          isValid={touched.samagraId && !errors.samagraId}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik06">
                        <Form.Label>AAdhar No.</Form.Label>
                        <Form.Control
                          pattern="\d{12}"
                          maxLength="12"
                          type="text"
                          name="aadhar"
                          value={formValue.aadhar}
                          onChange={handleChange}
                          isValid={touched.aadhar && !errors.aadhar}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik07">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                          type="text"
                          name="contact"
                          pattern="\d{10}"
                          maxLength="10"
                          value={formValue.contact}
                          onChange={handleChange}
                          isValid={touched.contact && !errors.contact}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik08">
                        <Form.Label>Alternate Contact </Form.Label>
                        <Form.Control
                          pattern="\d{10}"
                          maxLength="10"
                          type="text"
                          name="alternateContact"
                          value={formValue.alternateContact}
                          onChange={handleChange}
                          isValid={
                            touched.alternateContact && !errors.alternateContact
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik09">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formValue.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik010">
                        <Form.Label>Religion</Form.Label>
                        <Form.Control
                          type="text"
                          name="religion"
                          value={formValue.religion}
                          onChange={handleChange}
                          isValid={touched.religion && !errors.religion}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik011">
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control
                          type="text"
                          name="nationality"
                          value={formValue.nationality}
                          onChange={handleChange}
                          isValid={touched.nationality && !errors.nationality}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik12">
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control
                          type="text"
                          name="bloodGroup"
                          value={formValue.bloodGroup}
                          onChange={handleChange}
                          isValid={touched.bloodGroup && !errors.bloodGroup}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik12">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                          type="text"
                          name="category"
                          value={formValue.category}
                          onChange={handleChange}
                          isValid={touched.category && !errors.category}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik12">
                        <Form.Label>Disability Type</Form.Label>
                        <Form.Control
                          type="text"
                          name="disabilityType"
                          value={formValue.disabilityType}
                          onChange={handleChange}
                          isValid={
                            touched.disabilityType && !errors.disabilityType
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik12">
                        <Form.Label>Disability % </Form.Label>
                        <Form.Control
                          type="number"
                          name="disabilityPercentage"
                          value={formValue.disabilityPercentage}
                          onChange={handleChange}
                          isValid={
                            touched.disabilityPercentage &&
                            !errors.disabilityPercentage
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.disabilityPercentage}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                  </div>
                  <hr />
                  <div className="Education-fees">
                    <h3>Education / Fees</h3>
                    <Row className="mb-3 ">
                      <Form.Group as={Col} md="" controlId="validationFormik13">
                        <Form.Label>School Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="schoolName"
                          value={formValue.schoolName}
                          onChange={handleChange}
                          isValid={touched.schoolName && !errors.schoolName}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik14">
                        <Form.Label>Qualification</Form.Label>
                        <Form.Control
                          type="text"
                          name="qualification"
                          value={formValue.qualification}
                          onChange={handleChange}
                          isValid={
                            touched.qualification && !errors.qualification
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik15">
                        <Form.Label>Passing Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="passingYear"
                          value={formValue.passingYear}
                          onChange={handleChange}
                          isValid={touched.passingYear && !errors.passingYear}
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik16">
                        <Form.Label>Board name</Form.Label>
                        <Form.Control
                          type="text"
                          name="board"
                          value={formValue.board}
                          onChange={handleChange}
                          isValid={touched.board && !errors.board}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik17">
                        <Form.Label>Marks</Form.Label>
                        <Form.Control
                          type="number"
                          name="marks"
                          value={formValue.marks}
                          onChange={handleChange}
                          isValid={touched.marks && !errors.marks}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik18">
                        <Form.Label>Percentages</Form.Label>
                        <Form.Control
                          type="text"
                          name="resultPercentage"
                          value={formValue.resultPercentage}
                          onChange={handleChange}
                          isValid={
                            touched.resultPercentage && !errors.resultPercentage
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik19">
                        <Form.Label>Fees</Form.Label>
                        <Form.Control
                          type="text"
                          name="fees"
                          value={formValue.fees}
                          onChange={handleChange}
                          isValid={touched.fees && !errors.fees}
                        />
                      </Form.Group>
                    </Row>
                  </div>{" "}
                  <hr />
                  <div className="FamilyDetails">
                    <h3>Family Details</h3>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik22">
                        <Form.Label>father Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fatherName"
                          value={formValue.fatherName}
                          onChange={handleChange}
                          isValid={touched.fatherName && !errors.fatherName}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik23">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                          type="text"
                          pattern="\d{10}"
                          maxLength="10"
                          name="ParentContact1"
                          value={formValue.ParentContact1}
                          onChange={handleChange}
                          isValid={
                            touched.ParentContact1 && !errors.ParentContact1
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik24">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                          type="text"
                          name="occupationFather"
                          value={formValue.occupationFather}
                          onChange={handleChange}
                          isValid={
                            touched.occupationFather && !errors.occupationFather
                          }
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik25">
                        <Form.Label>Mother name</Form.Label>
                        <Form.Control
                          type="text"
                          name="motherName"
                          value={formValue.motherName}
                          onChange={handleChange}
                          isValid={touched.motherName && !errors.motherName}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik33">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                          pattern="\d{10}"
                          maxLength="10"
                          type="text"
                          name="ParentContact2"
                          value={formValue.ParentContact2}
                          onChange={handleChange}
                          isValid={
                            touched.ParentContact2 && !errors.ParentContact2
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik26">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                          type="text"
                          name="occupationMother"
                          value={formValue.occupationMother}
                          onChange={handleChange}
                          isValid={
                            touched.occupationMother && !errors.occupationMother
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik26">
                        <Form.Label>Family Income</Form.Label>
                        <Form.Control
                          pattern="[0-9]{4-6}"
                          type="text"
                          name="familyAnnualIncome"
                          value={formValue.familyAnnualIncome}
                          onChange={handleChange}
                          isInValid={
                            touched.familyAnnualIncome &&
                            !errors.familyAnnualIncome
                          }
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik26">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="bankName"
                          value={formValue.bankName}
                          onChange={handleChange}
                          isValid={touched.bankName && !errors.bankName}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik26">
                        <Form.Label>Account No.</Form.Label>
                        <Form.Control
                          pattern="\d{15}"
                          maxLength="15"
                          type="text"
                          name="bankAccountNo"
                          value={formValue.bankAccountNo}
                          onChange={handleChange}
                          isValid={
                            touched.backAccountNo && !errors.backAccountNo
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="3"
                        controlId="validationFormik26">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control
                          pattern="[A-Za-z0-9]{13}"
                          maxLength="13"
                          type="text"
                          name="ifscCode"
                          value={formValue.ifscCode}
                          onChange={handleChange}
                          isValid={touched.ifscCode && !errors.ifscCode}
                        />
                      </Form.Group>
                    </Row>
                  </div>
                  <hr />
                  <div className="Address">
                    <h3>Address</h3>
                    <Form.Group className="mb-3" controlId="formGridAddress27">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        name="flatDoorBlock"
                        value={formValue.flatDoorBlock}
                        onChange={handleChange}
                        placeholder="1234 Main St"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress28">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control
                        name="locality"
                        value={formValue.locality}
                        onChange={handleChange}
                        placeholder="Apartment, studio, or floor"
                      />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity29">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          name="city"
                          value={formValue.city}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik30">
                        <Form.Label>State</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          value={formValue.state}
                          onChange={handleChange}
                          name="state">
                          <option>Select State </option>
                          <option key="MadhyaPradesh" value="MadhyaPradesh">
                            MadhyaPradesh
                          </option>
                          <option key="Other's" value="Other">
                            Other's
                          </option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip31">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          name="zip"
                          pattern="\d{6}"
                          maxLength="6"
                          value={formValue.zip}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Row>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormik0"
                    />
                  </Form.Group>
                  <Button type="submit" onClick={activeLoader}>
                    Submit form
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default AdmissionForm;
