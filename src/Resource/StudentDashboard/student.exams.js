import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBRow } from "mdb-react-ui-kit";
import "../css/student.exam.css";

function StudentExam() {
  return (
    <div
      className="gradient-custom-2  shadow p-1 mb-1 bg-white rounded  mainExam  "
      style={{ minWidth: "40rem" }}>
      <MDBRow
        style={{ backgroundColor: "#365486", color: "#f0f0f0" }}
        className="justify-content-center align-items-center rounded p-1 h4">
        Examination Dashboard
      </MDBRow>{" "}
      <Container>
        <Row style={{ minHeight: "15rem" }}>
          <Col sm={6}>
            {" "}
            <MDBRow className="justify-content-center align-items-center  p-1 h6 examRowInner">
              Active Online Forms
            </MDBRow>
            {
              <MDBRow className="justify-content-center align-items-center rounded p-1 h4 mt-5">
                No Data Found
              </MDBRow>
            }
          </Col>
          <Col sm={6}>
            {" "}
            <MDBRow className="justify-content-center align-items-center  p-1 h6 examRowInner ">
              Examination TimeTable, AdmitCard & Online Assessment
            </MDBRow>
            {
              <MDBRow className="justify-content-center align-items-center rounded p-1 h4 mt-5">
                No Data Found
              </MDBRow>
            }
          </Col>
        </Row>
        <Row style={{ minHeight: "15rem" }}>
          <Col sm={6}>
            {" "}
            <MDBRow className="justify-content-center align-items-center  p-1 h6 examRowInner">
              Online Forms History
            </MDBRow>
            <Container>
              <table>
                <thead>
                  <tr>
                    <th>class </th>
                    <th>type </th>

                    <th style={{ minWidth: "8rem" }}>Examination</th>
                    <th>Fees Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>September Quarterly Examination, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                  </tr>
                </tbody> */}
              </table>
            </Container>
            {
              <MDBRow className="justify-content-center align-items-center rounded p-1 h4 mt-5">
                No Data Found
              </MDBRow>
            }
          </Col>
          <Col sm={6}>
            {" "}
            <MDBRow className="justify-content-center align-items-center  p-1 h6 examRowInner ml-1">
              Result's{" "}
            </MDBRow>
            <Container className="resultTable">
              <table>
                <thead>
                  <tr>
                    <th>class </th>
                    <th>type </th>
                    <th>Roll&nbsp;No.</th>
                    <th>result</th>
                    <th>percentage</th>
                    <th>BackPapers</th>
                    <th>View</th>
                  </tr>
                </thead>
                {/* <tbody>
                  <tr>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                    <td>Row 1, </td>
                  </tr>
                </tbody> */}
              </table>
            </Container>
            {
              <MDBRow className="justify-content-center align-items-center rounded p-1 h4 mt-5">
                No Data Found
              </MDBRow>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentExam;
