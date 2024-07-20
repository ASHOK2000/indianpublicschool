import {
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBValidationItem,
} from "mdb-react-ui-kit";

import React, { useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CommonService from "../CommonService/CommonService";
import { Button } from "@mui/material";

const initialValues = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};
function ChangePassword() {
  const [formValue, setFormValue] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.table([name, value]);
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formValue, "new password form");
      const response = await CommonService.create(
        "user/changePassword",
        formValue
      );
      if (response) {
        alert("Password Changed successfully");
        setFormValue(initialValues);
      }
    } catch (error) {
      console.error("Password Change Error:", error);
    }
  };

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col col="12">
          <Card
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Reset Password</h2>
              <p className="text-danger-50 mb-3 disable">
                *Please enter your new Login password carefully !
              </p>

              <Form ref={formRef} onSubmit={handleSubmit}>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please provide a valid currentPassWord.">
                  <MDBInput
                    value={formValue.oldPassword}
                    name="oldPassword"
                    placeholder="enter  your  current password"
                    onChange={handleChange}
                    id="validationCustom03"
                    required
                    label="Current Password"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please provide a valid newPassword."
                  invalid>
                  <MDBInput
                    pattern="[A-Za-z0-9]{6-18}"
                    placeholder="enter  new password"
                    value={formValue.password}
                    name="password"
                    onChange={handleChange}
                    id="validationCustom03"
                    required
                    label="New Password"
                  />
                </MDBValidationItem>
                <div className="text-secondary mb-3">
                  * password must be contain numbers and letters <br />*
                  password should not be less than 6 characters
                </div>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please provide a valid ConfirmPassword."
                  invalid>
                  <MDBInput
                    value={formValue.confirmPassword}
                    name="confirmPassword"
                    placeholder="confirm new password"
                    onChange={handleChange}
                    id="validationCustom03"
                    required
                    label="Confirm Password"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-12"
                  feedback="You must agree before submitting."
                  invalid>
                  <MDBCheckbox
                    label="Agree to terms and conditions"
                    id="invalidCheck"
                    required
                  />
                </MDBValidationItem>
                <Button variant="contained" type="submit" className="mt-5">
                  Submit
                </Button>
              </Form>
            </MDBCardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangePassword;
