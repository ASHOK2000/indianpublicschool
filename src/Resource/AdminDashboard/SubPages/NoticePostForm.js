import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../../../css/NoticePost.admin.css";
import { Card, Container } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import CommonService from "../../../CommonService/CommonService";
import { useLocation, useNavigate } from "react-router-dom";

const NoticeRequest = {
  title: "",
  description: "",
  terms: "",
};

function NoticePost({ noticeId = "" }) {
  const [notice, setNotice] = useState(NoticeRequest);

  const formRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  useEffect(() => {
    if (location.state && location.state.NoticeByUuid) {
      setNotice(location.state.NoticeByUuid);
    }
  }, [location.state]);

  const isEditMode = !!location.state?.NoticeByUuid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isEditMode) {
        const postNotice = await CommonService.create("notice", notice);
        if (postNotice) {
          alert("notice Posted");
          formRef.current.reset();
          setNotice(NoticeRequest);
          navigate("/admin/notice");
        }
      } else {
        const UpdateNotice = await CommonService.update(
          "notice",
          notice.uuid,
          notice
        );
        formRef.current.reset();
        setNotice(NoticeRequest);
        navigate("/admin/notice");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <div className="noticeHeading">
        <h3>Announcement</h3>
      </div>
      <Row className=" d-flex justify-content-center align-items-center ">
        <Col md={10} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card
            className="shadow"
            style={{ backgroundColor: "#ded7d7f0", padding: "10px" }}>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Row className="">
                <Form.Group as={Col} controlId="validationFormik01">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={notice.title}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="validationFormik02">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    as="textarea"
                    rows={6}
                    name="description"
                    onChange={handleChange}
                    value={notice.description}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Please Confirm the submission"
                  onChange={handleChange}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NoticePost;
