import "../../css/FeesSubmit.admin.css";
import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { Container, TextField } from "@mui/material";
import CommonService from "../../CommonService/CommonService";
import Button from "react-bootstrap/Button";
import * as formik from "formik";
import { MDBTextArea } from "mdb-react-ui-kit";
import { MDBListGroupItem } from "mdb-react-ui-kit";
import ListSkeleton from "../../Loaders/ListSkeleton";

const formInputs = {
  StudentName: "",
  fatherName: "",
  DueAmount: "",
  rec_amount: 0,
  paymentMode: "",
  remittance: "",
  message: "",
};

function Fees() {
  const [years, setYears] = useState([]); // found Student Data
  const [ClaSSList, setClassList] = useState(null); //hold the student List
  const [selectedClass, setSelectedClass] = useState(null); // hold the selected class Id
  const [StudentList, setStudentList] = useState(null); //hold the student List
  const [selectedStudent, setSelectedStudent] = useState(null); //hold the student List
  const [studentData, setStudentData] = useState(""); // found Student Data
  const [feesData, setFeesData] = useState(null); // hold the fees data
  let feesForm;
  if (studentData !== null) {
    feesForm = {
      StudentName: "",
      fatherName: "",
      studentId: "",
      classId: "",
      unique_id: "",
      sessionId: "",
      dueAmount: 0,
      feesType: "",
      paymentMode: "",
      rec_amount: 0,
      message: "",
      fees: 0,
    };
  }

  console.log(feesData, "Studentfees History ");

  const [formValue, setFormValue] = useState(feesForm);

  const { Formik } = formik;
  const formRef = useRef(null);

  // const totalDueAmount = feesData.reduce((total, currentItem) => {
  //   return total + currentItem.Due_Amount;
  // }, 0);

  useEffect(() => {
    fetchClassData();
    fetchSessionData();
  }, []);

  const fetchClassData = async () => {
    try {
      const classes = await CommonService.findAll("classes");

      setClassList(classes.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchSessionData = async () => {
    try {
      const years = await CommonService.findAll("session");

      setYears(years.results);
      setFormValue(years[0].uuid);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // user By classId
  useEffect(() => {
    const userData = async () => {
      try {
        if (selectedClass !== null) {
          const userByClassId = await CommonService.findById(
            "user/ClassId",
            selectedClass
          );
          setStudentList(userByClassId.results);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    userData();
  }, [selectedClass]);

  useEffect(() => {
    const userData = async () => {
      try {
        if (selectedStudent !== null) {
          const userDetailsById = await CommonService.findById(
            "user",
            selectedStudent //selectedStudent uuid
          );
          const userFeesById = await CommonService.findById(
            "fees/studentId",
            selectedStudent //selectedStudent uuid
          );
          setFormValue({
            studentId: userDetailsById.uuid,
            classId: selectedClass,
            unique_id: userDetailsById.unique_id,
            fees: userDetailsById.remainingFees,
          });
          setStudentData(userDetailsById);
          //find Fees History from fees

          setFeesData(userFeesById);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    userData();
  }, [selectedStudent]);

  const handleClassChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedClass(selectedValue);
  };
  const handleSelectedStudent = (event) => {
    const selectedValue = event.target.value;
    setSelectedStudent(selectedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CommonService.create("fees", formValue);
      if (response) {
        alert("fess submit registration Success");
        formRef.current.reset();
        setStudentData(formInputs);
      }
    } catch (error) {
      console.error(error, "Teacher registration Error");
      setTimeout(() => {
        alert("Teacher registration Error ");
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  function formatDate(date) {
    // Customize this function to format the date as per your requirements
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const scrollContainerStyle = { width: "auto", maxHeight: "300px" };
  return (
    <Container>
      <Row>
        <div className="noticeHeading">
          <h3>Fees !</h3>
        </div>
        <div className="yearSelectHead flex-grow-1 d-flex gap-2 align-items-center justify-content-end">
          <span>financial Year :</span>
          <Form.Select
            aria-label="Default select example"
            className="yearSelect">
            {years.map((year) => (
              <option key={year.uuid} value={year.title}>
                {year.title}
              </option>
            ))}
          </Form.Select>
        </div>
        <Row className="dashboardRow">
          <Col sm={8} className="feesForm">
            <div className="feesDashboard">fees submission </div>
            <Col>
              class: {/* //classData */}
              <Form>
                <Form.Select
                  as={Col}
                  md="6"
                  onChange={handleClassChange}
                  value={selectedClass}>
                  <option value="" disabled selected>
                    Select a class
                  </option>
                  {ClaSSList &&
                    ClaSSList.map((item, index) => (
                      <option
                        key={index}
                        value={item.uuid}
                        style={{ textTransform: "uppercase" }}>
                        {item.name}
                      </option>
                    ))}
                </Form.Select>
              </Form>
            </Col>

            <Col>
              {/* Section List  */}
              Student:&nbsp;
              {/* //studentData  */}
              <Form>
                <Form.Select
                  as={Col}
                  md="6"
                  onChange={handleSelectedStudent}
                  value={selectedStudent}>
                  <option value="" disabled selected>
                    Select a Student
                  </option>
                  {StudentList &&
                    StudentList.map((item, index) => (
                      <option
                        key={index}
                        value={item.uuid}
                        style={{ textTransform: "uppercase" }}>
                        {item.firstName} &nbsp;&nbsp;&nbsp; [&nbsp;
                        {item.unique_id}&nbsp;]
                      </option>
                    ))}
                </Form.Select>
              </Form>
            </Col>

            <div className="feesSubmitAdmin">
              <hr />
              {/* //fees Form  */}

              <Formik>
                {({ touched, errors }) => (
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="StudentName"
                          value={studentData.firstName}
                          onChange={handleChange}
                          isValid={touched.StudentName && !errors.StudentName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01">
                        <Form.Label>Parent Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="ParentName"
                          value={studentData.fatherName}
                          onChange={handleChange}
                          isValid={touched.ParentName && !errors.ParentName}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik02">
                        <Form.Label>Due Amount</Form.Label>
                        <Form.Control
                          type="text"
                          name="DueAmount"
                          value={studentData.remainingFees}
                          onChange={handleChange}
                          isValid={touched.DueAmount && !errors.DueAmount}
                        />

                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik04">
                        <Form.Label>Remittance fee</Form.Label>

                        <Form.Select
                          required
                          name="remittance"
                          onChange={handleChange}
                          aria-label="Default select example">
                          <option value="admission" disabled selected>
                            Select Fees Type
                          </option>
                          <option value="admission">Admission</option>
                          <option value="tuition">Tuition</option>
                          <option value="exam">Exam</option>
                          <option value="other">Other's</option>
                        </Form.Select>

                        <Form.Control.Feedback type="invalid">
                          {errors.remittance}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik05">
                        <Form.Label>Payment&nbsp;Mode</Form.Label>
                        <Form.Select
                          required
                          name="paymentMode"
                          onChange={handleChange}
                          aria-label="Default select example">
                          <option value="admission" disabled selected>
                            Select Payment Mode
                          </option>

                          <option defaultValue value="cash">
                            Cash
                          </option>
                          <option value="upi">UPI</option>
                          <option value="netBanking">Net Banking</option>
                          <option value="other">Other's</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik03">
                        <Form.Label>Rec. Amount</Form.Label>

                        <Form.Control
                          required
                          type="number"
                          placeholder="pay"
                          name="rec_amount"
                          value={studentData.rec_amount}
                          onChange={handleChange}
                          isInvalid={!!errors.rec_amount}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.rec_amount}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="validationFormik06">
                        <Form.Label>Message</Form.Label>
                        <MDBTextArea
                          required
                          // label="Message"
                          id="textAreaExample"
                          rows={4}
                          type="text"
                          placeholder="Message......"
                          name="message"
                          value={studentData.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.RecAmount}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        name="terms"
                        label="I declare that the details submitted are accurate to the best of my knowledge."
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik0"
                      />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col sm={4}>
            <div className="feesDashboard">student fees history</div>
            <div
              className="scrollbar scrollbar-secondary  mt-3 mx-auto"
              style={scrollContainerStyle}>
              <div className="feesHistory">
                {feesData && feesData.results ? (
                  feesData.results.map((data, index) => (
                    <MDBListGroupItem
                      key={index}
                      className="d-flex justify-content-between align-items-start"
                      style={{
                        minHeight: "4rem",
                        border: "1px Solid gray",
                        borderRadius: "20px",
                        marginBottom: "2px",
                        padding: "8px",
                        maxWidth: "20rem",
                      }}>
                      <div className="ms-2 me-auto ">
                        <div className="fw-bold ">
                          {formatDate(new Date(data.created_date))}
                        </div>
                        <span>{data.paymentMode}</span> &nbsp;&nbsp;||
                        &nbsp;&nbsp;
                        <span>{data.remittance}</span>
                      </div>

                      <Badge bg="success" pill>
                        {data.rec_amount}
                      </Badge>
                    </MDBListGroupItem>
                  ))
                ) : (
                  <div>
                    <ListSkeleton />
                    <ListSkeleton />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Fees;
