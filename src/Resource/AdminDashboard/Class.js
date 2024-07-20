import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { Button, Col, Row } from "react-bootstrap";
import { Container } from "@mui/material";
import "../../css/Class.admin.css";
import CommonService from "../../CommonService/CommonService";
import Form from "react-bootstrap/Form";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../CommonService/Search";
import ListSkeleton from "../../Loaders/ListSkeleton";

export default function ClassCard() {
  const [selectedClass, setSelectedClass] = useState(null); // hold the selected class Id
  const [classData, setClassData] = useState([]); // class Lists
  const [studentData, setStudentData] = useState([]); // found Student Data
  const [classFees, setClassFees] = useState([]); // found Student Data

  const navigate = useNavigate();

  const handleClassChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedClass(selectedValue);
  };

  useEffect(() => {
    const fetchClass = async () => {
      try {
        const users = await CommonService.findAll("classes");
        setClassData(users.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClass();
  }, []);

  useEffect(() => {
    const userData = async () => {
      try {
        if (selectedClass !== null) {
          const userByClassId = await CommonService.findById(
            "user/ClassId",
            selectedClass
          );

          setStudentData(userByClassId);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    //get total Fees Data bY classId
    const FeesDataByClass = async () => {
      try {
        if (selectedClass !== null) {
          const totalFeesByClass = await CommonService.findById(
            "fees/feesTillDate",
            selectedClass
          );
          setClassFees(totalFeesByClass[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    userData();
    FeesDataByClass();
  }, [selectedClass]);

  async function updateStudent(uuid) {
    try {
      const findStudentById = await CommonService.findById("user", uuid);

      navigate("/admin/admissionForm", {
        state: { findStudentById },
      });
    } catch (error) {
      console.log(error, "Error fetching");
    }
  }
  async function UserProfile(uuid) {
    try {
      const userProfileData = await CommonService.findById("user", uuid);
      navigate("/Profile", { state: { userProfileData } });
    } catch (error) {
      console.error("Error fetching teacher data:", error);
    }
  }

  async function DeleteStudent(uuid) {
    try {
      const DeleteStudent = await CommonService.delete("user", uuid);
      if (DeleteStudent) {
        alert("Student deleted");
      }
    } catch (error) {
      console.error(error, "Error deleting Student");
    }
  }

  function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  function formatDate(date) {
    // Customize this function to format the date as per your requirements
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const data = [
    { digits: studentData.length ?? 0, title: "Total Admission" },
    { digits: 4, title: "Remaining Fees" },
    { digits: classFees?.totalFees ?? 0, title: "Total Fees" },
  ];

  return (
    <Container>
      <Row className="mt-5">
        <Col sm={2}>
          <span>Select Class</span>
        </Col>
        <Col sm={2}>
          <Form>
            <Form.Select
              as={Col}
              md="3"
              onChange={handleClassChange}
              value={selectedClass}>
              <option value="" disabled>
                Select a class
              </option>
              {classData &&
                classData.map((item, index) => (
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
        <Col sm={5}></Col>
        <Col sm={2}>
          <div>
            <SearchBox collectionName="user" />
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        {studentData &&
          data.map((value, index) => (
            <Col sm key={index}>
              <MDBCard alignment="center" className="headCard">
                <MDBCardHeader
                  style={{ maxHeight: "3rem" }}
                  className="headCard">
                  <h3>{value.title}</h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>
                    <h1 style={{ color: "#3b00fb76" }}>{value.digits}</h1>
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </Col>
          ))}
      </Row>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Student</th>
            <th scope="col"></th>
            <th scope="col">Contact</th>
            <th scope="col">Parent</th>
            <th scope="col">Fees</th>
            <th scope="col">Admission Date</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        {studentData && studentData.results ? (
          studentData.results.map((value, index) => (
            <MDBTableBody key={index}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <span
                      style={{
                        minWidth: "40px", // Adjust the width and height as needed
                        minHeight: "36px",
                        paddingTop: "6px",

                        backgroundColor: "#3a8be7",
                        borderRadius: "50%", // Make it a circle
                        color: "#fff", // Text color
                        fontSize: "18px", // Adjust the font size as needed
                        fontWeight: "bold",
                      }}>
                      {" "}
                      &nbsp; &nbsp;
                      {value.firstName
                        ? value.firstName.charAt(0).toUpperCase()
                        : "N/A"}
                      &nbsp;
                    </span>

                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {value.firstName}&nbsp;
                        {value.lastName}
                      </p>
                      <p className="text-muted mb-0">{value.unique_id}</p>
                    </div>
                  </div>
                </td>
                <td></td>
                <td>
                  <p className="fw-normal mb-1">{value.contact}</p>
                  <p className="text-muted mb-0">{value.alternateContact}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{value.fatherName}</p>
                  <p className="text-muted mb-0">{value.occupationFather}</p>
                </td>
                <td>
                  <MDBBadge color="danger" pill>
                    {value.remainingFees}
                  </MDBBadge>
                </td>
                <td>
                  {value.created_date
                    ? isValidDate(value.created_date)
                      ? formatDate(new Date(value.created_date))
                      : "Invalid Date"
                    : "Date not available"}
                </td>{" "}
                <td>
                  {" "}
                  <Button variant="outline-info">
                    <VisibilityIcon onClick={() => UserProfile(value.uuid)} />
                  </Button>{" "}
                  <Button variant="outline-secondary">
                    <EditIcon onClick={() => updateStudent(value.uuid)} />
                  </Button>{" "}
                  <Button variant="outline-danger">
                    <DeleteIcon onClick={() => DeleteStudent(value.uuid)} />
                  </Button>{" "}
                </td>
              </tr>
            </MDBTableBody>
          ))
        ) : (
          <tr>
            <th>
              <ListSkeleton />
            </th>
            <th></th>
            <th>
              <ListSkeleton />
            </th>
            <th>
              <ListSkeleton />
            </th>
            <th>
              <ListSkeleton />
            </th>
            <th>
              <ListSkeleton />
            </th>
            <th>
              <ListSkeleton />
            </th>
            {/* Pass the variants array as a prop */}
          </tr>
        )}
      </MDBTable>
    </Container>
  );
}
