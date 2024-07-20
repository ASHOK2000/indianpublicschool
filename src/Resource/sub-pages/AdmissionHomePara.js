import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../css/about.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home_About() {
  return (
    <MDBContainer className="homeSection AdmissionPara">
      <MDBRow>
        <Col md={2}></Col>
        <MDBCol md="8" mt="5">
          <p>ADMISSION</p>
          <div className="aboutText">
            Indian Public School is offering value-based education along with
            World-class facilities transforming the lives of its students. We at
            Indian Public School believe that every child can learn and succeed.
            Being one of the best CBSE schools in Indian, we are known for its
            infrastructure, lush green environment, great academic results and
            sports facilities. In our efforts to nurture the children entrusted
            to our care, we offer a student-centric, value-driven education that
            helps our students to enjoy coming to school, pursue their passions
            and develop into Active learners, Dynamic leaders and Enterprising
            citizens making INDIA proud. Join us to have a global perspective
            and be outward looking - GLOBAL CITIZENS with INDIAN VALUES. Our
            constant endeavor at Indian Public School, is to ensure that the
            school always lives up to its ethos of “care, capacity, and
            capability”. Learning is made fun and effective through various
            innovative methodologies designed to engage the students actively.
            <div className="mt-4">
              <Link to="/Admission " className="button-89" role="button">
                Learn More
              </Link>
            </div>
          </div>
        </MDBCol>
        <Col md={3}></Col>
      </MDBRow>
    </MDBContainer>
  );
}
