import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "./TermsCondition";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Alerts from "./../../CommonService/Alert";
import CommonService from "../../CommonService/CommonService";

const admissionRequestData = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  currentClass: "",
  prevClass: "",
  address: "",
  landmark: "",
  state: "madhyaPradesh",
  district: "",
  city: "",
  zip: "",
  termsAccepted: "",
};
function AdmissonForm() {
  const [modalShow, setModalShow] = React.useState(false);
  const [formData, setFormData] = useState(admissionRequestData);

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const FormSubmit = CommonService.create("admissionRequest", formData);
      if (FormSubmit.ok) {
        // Handle success (optional)
        setTimeout(() => {
          <Alerts message="This is a success message." type="success" />;
        }, 2000);
      } else {
        // Handle error

        setTimeout(() => {
          <Alerts message="This is a success message." type="error" />;
        }, 2000);
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    }

    formRef.current.reset();
  };

  return (
    <Container>
      <Row>
        {/* form  in sm-4 */}
        <Col className="shadow-lg p-2 mb-2 bg- ">
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    label="*First name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    label="*Last name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                <Form.Control
                  pattern="\d{10}"
                  maxLength="10"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="9876543210"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="currentClass">
              <Form.Label>Class</Form.Label>
              <Form.Select
                defaultValue="Select class you want to admit"
                name="currentClass"
                value={formData.currentClass}
                onChange={handleChange}>
                <option>Select class you want to admit</option>
                <option>&nbsp;L.K.G</option>
                <option>&nbsp;U.K.G</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="prevClass">
              <Form.Label>Previous School</Form.Label>
              <Form.Control
                required
                name="prevClass"
                value={formData.prevClass}
                onChange={handleChange}
                placeholder="Previous Education Details"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="landmark">
              <Form.Label>LandMark</Form.Label>
              <Form.Control
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="School, lake, Tree etc ...."
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  name="state"
                  value={formData.state}
                  onChange={handleChange}>
                  <option>Madhya&nbsp;Pradesh</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="district">
                <Form.Label>District</Form.Label>
                <Form.Control
                  placeholder="District Name"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}></Form.Control>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="City">
                <Form.Label>City / Village</Form.Label>
                <Form.Control
                  required
                  placeholder="City / Village Name"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="zip">
                <Form.Label maxLength="6">Zip</Form.Label>
                <Form.Control
                  pattern="\d{6}"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Enter 6-digit zip code"
                  maxLength="6"
                />
              </Form.Group>
            </Row>

            <div>
              <Form.Group className="mb-3" id="Checkbox">
                <div className="d-flex align-items-center">
                  <Form.Check type="checkbox" className="me-2" />
                  please accept
                  <Link
                    to="#"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    onClick={() => setModalShow(true)}
                    style={{ textDecoration: "none" }}>
                    Terms & Condition
                  </Link>
                </div>
              </Form.Group>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              className="mb-4 px-5 d-flex align-items-center">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdmissonForm;
