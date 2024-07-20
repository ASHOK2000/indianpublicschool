// eslint-disable-next-line

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import sideImageHome from "../../res_images/pngwing.com(2).png";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import examImage from "../../res_images/exam_4619285.png";
import attendance from "../../res_images/attendance.png";
import classSchedule from "../../res_images/classSchedule.png";
import documents from "../../res_images/documents.png";
import feedback from "../../res_images/feedback.png";
import fees from "../../res_images/fees.png";
import marksheet from "../../res_images/marksheet.png";
import nodues from "../../res_images/nodues.png";
import profile from "../../res_images/man.png";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

import "../css/studentDashboard.css";
import StudentNotice from "./Student.notice";
import CommonService from "../../CommonService/CommonService";

function StudentServices() {
  const [phoneSize, setPhoneSize] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setPhoneSize(true);
    }
  }, [window.innerWidth]);

  const name = "ashok";
  const formatDate = (date) => {
    const option = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-us", option);
  };

  const handleProfile = async () => {
    const userProfileData = await CommonService.findByTokenDetails("user");

    navigate("/student/home-profile", {
      state: { userProfileData },
    });
  };

  return (
    <div class="">
      <Container>
        <div
          className="shadow-lg p-2 mb-5 container  welcome_Container"
          style={{
            borderRadius: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div className="welcomeText">
            <p style={{ fontFamily: "myFirstFont" }}>
              {formatDate(new Date())}{" "}
            </p>
            <p className="wlcmText">Welcome back, {name.toUpperCase()}! </p>
            <p>Always stay updated in your student portal </p>
          </div>
          {!phoneSize && (
            <div>
              <img
                alt="serviceLogo"
                src={sideImageHome}
                style={{ width: "350px", maxHeight: "200px" }}
              />
            </div>
          )}
        </div>
        <Row
          className={`text-white ${
            !phoneSize ? "gy-2" : "gy-2"
          }  position-relative`}>
          <Col className="col-12 col-md-4  order-md-1">
            <div className="notice-box">
              <div className="notice-heading">
                <p>Notice</p>
              </div>
              <MDBCol md="12" mt="2">
                <div id="element" className="scrollspy-example">
                  <section id="section-1">
                    <div style={{ maxHeight: "5rem" }}>
                      <ul className="notice-area px-2">
                        <StudentNotice />
                      </ul>
                    </div>
                  </section>
                </div>
              </MDBCol>
            </div>
          </Col>

          <Col className="col-12 col-md-8 serviceCards">
            <Row
              className={`text-white serviceCards ${
                !phoneSize ? "gy-2" : "p-4"
              }  position-relative`}>
              <Col sm="6" lg="4">
                <Link onClick={handleProfile}>
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={profile}></img>
                    <p>Profile</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/student/directory">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={documents}></img>
                    <p>Directory</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/student/fees">
                  <div className="card_style">
                    <img alt="serviceLogo" id="service-images" src={fees}></img>
                    <p>Fees&nbsp;Details</p>
                  </div>{" "}
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/student/marksheet-tracker">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={marksheet}></img>
                    <p>MarkSheet&nbsp;Tracker</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/student/exams">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={examImage}></img>
                    <p>Examination&nbsp;Dashboard</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/student/class-schedule">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={classSchedule}></img>
                    <p>class&nbsp;Schedule</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/events/events1">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={attendance}></img>
                    <p>Attendance&nbsp;Report&nbsp;Card</p>
                  </div>
                </Link>
              </Col>
              <Col sm="6" lg="4">
                <Link to="/events/events1">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={nodues}></img>
                    <p>Nodues Status</p>
                  </div>
                </Link>
              </Col>{" "}
              <Col sm="6" lg="4">
                <Link to="/events/events1">
                  <div className="card_style">
                    <img
                      alt="serviceLogo"
                      id="service-images"
                      src={feedback}></img>
                    <p>Feedback&nbsp;form</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentServices;
