import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import logoImage from "../res_images/ips_logo.png";
import Alert from "react-bootstrap/Alert";
import LoginImage from "../res_images/login.png";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [unique_id, setunique_id] = useState();
  const [password, setPassword] = useState();
  const [alertType, setAlertType] = useState(null);

  const history = useNavigate();

  const handleLogin = async (e) => {
    if (e) {
      e.preventDefault();
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/auth/login`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ unique_id, password }),
          }
        );

        if (response.status === 201) {
          const data = await response.json();
          localStorage.setItem("userData", JSON.stringify(data));

          setAlertType("success");

          setTimeout(() => {
            setAlertType(null);
            if (data.payload.role === "Admin") {
              history("/admin/dashboard");
            } else if (data.payload.role === "Student") {
              history("/student/dashboard");
            } else {
              history("/");
            }

            window.location.reload();
          }, 2000);
        } else {
          console.error("authError");
        }
      } catch (error) {
        setAlertType("error");
        setTimeout(() => {
          setAlertType(null);
        }, 2000);
        console.error("error during login", error);
      }
    } else {
      console.error("Event object is undefined");
    }
  };

  return (
    <div className="">
      <div style={{}}>
        <MDBContainer className="my-5 ">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <MDBCard>
              <MDBRow className="g-0">
                <MDBCol md="6">
                  <MDBCardImage
                    src={LoginImage}
                    alt="login form"
                    className="rounded-start w-100"
                    style={{ height: "40rem" }}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="d-flex flex-column">
                    <div className="d-inline-flex p-2  d-flex justify-content-around">
                      {alertType === "success" && (
                        <Alert
                          key="success"
                          variant="success"
                          style={{
                            color: "Green",
                            backgroundColor: "white",
                            border: "none",
                          }}>
                          <h3> ✅ Woooh! Successfully logged in</h3>
                        </Alert>
                      )}
                      {alertType === "error" && (
                        <Alert
                          key="danger"
                          className="alert-danger"
                          variant="danger"
                          style={{
                            color: "red",
                            backgroundColor: "white",
                            border: "none",
                          }}>
                          <h3>😿 Opps login Failed</h3>
                        </Alert>
                      )}
                    </div>
                    <div className="d-flex flex-row mt-2">
                      <MDBIcon
                        fas
                        icon="cubes fa-3x me-3"
                        style={{ color: "#ff6219" }}
                      />
                      <span className="h1 fw-bold mb-0">
                        {" "}
                        <Image
                          src={logoImage}
                          alt="indian Public school"
                          className="navbar_logo"
                        />
                      </span>
                    </div>
                    <h5
                      className="fw-normal my-4 pb-3"
                      style={{ letterSpacing: "1px" }}>
                      Sign into your account
                    </h5>

                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Unique Id</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Identity"
                          value={unique_id}
                          onChange={(e) => setunique_id(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          never share your Password with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Button variant="dark" size="lg" onClick={handleLogin}>
                        Submit
                      </Button>
                    </Form>

                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Student Login Creation?{" "}
                      <Link
                        to="/student-login-create"
                        style={{ color: "#393f81" }}>
                        Click here
                      </Link>
                    </p>

                    <div className="d-flex flex-row justify-content-start">
                      <Link
                        to="/terms-condition"
                        className="small text-muted me-1">
                        Terms of use.
                      </Link>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </div>
        </MDBContainer>
      </div>
    </div>
  );
}
