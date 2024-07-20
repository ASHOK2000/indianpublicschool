import Footer from "./Footer";
import NavBar from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/admisson.css";
import AdmissonForm from "./sub-pages/admissonForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { Container } from "react-bootstrap";
import AdmissionProcess from "./sub-pages/AdmissionProcess";

function Admisson() {
  const [open, setOpen] = useState(false);

  const paragraphText = `
 
  `;

  return (
    <Container class="d-flex justify-content-center">
      <Row>
        <Col></Col>
        <Col xs={12}>
          <div className="AdmissonFormhead">
            ONLINE APPLICATION FORM - ACADEMIC YEAR 2023-24
          </div>

          <li style={{ listStyle: "none", marginTop: "12px" }}>
            * For the Online Application form, please fill all nessesry fields
            and submit a Hard Copy of Document in School .
          </li>

          <AdmissonForm />

          <div className="mt-5">
            <h6>HERE ARE THE MUST-KNOWS FOR A SMOOTH ADMISSION PROCESS.</h6>
          </div>
          <div className="mt-5">
            <ol>
              <li>Complete the online application form.</li>
              <li>
                Please ensure that the following documents are uploaded while
                filling the online application form :
              </li>
              <ul>
                <li>
                  Photocopy of the student’s birth certificate and Aadhaar Card
                  (if applicable).
                </li>
                <li>
                  School leaving certificate (can be submitted later if not
                  currently available).
                </li>
                <li>
                  UDISE Number (Unified District information System for
                  Education) from current school.
                </li>
                <li>
                  Photocopy of the previous and current class Report Card.
                </li>
                <li>Photocopy of Address proof and Parent's Pan Card.</li>
                <li>Passport size photograph of the student.</li>
              </ul>

              <li>
                After submitting the online application form, if there are seats
                available in the standard that you have applied in, an email
                with a payment link for the first term fees will be sent to you.
                Parents are requested to make the necessary payment online.
              </li>
            </ol>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Admisson;
