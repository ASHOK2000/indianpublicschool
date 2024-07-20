import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CommonService from "../../CommonService/CommonService";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Skeleton from "react-loading-skeleton";

export default function MarksheetTracker() {
  const [marksheetData, setMarksheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const userProfileData = await CommonService.findAll("teacher");
        // setMarksheetData(userProfileData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className="gradient-custom-2  shadow p-1 mb-1 bg-white rounded ">
      <MDBRow
        style={{ backgroundColor: "#365486", color: "#f0f0f0" }}
        className="justify-content-center align-items-center rounded p-1 h4">
        Marksheet Tracker
      </MDBRow>
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="12" xl="12" style={{ backgroundColor: "#fffbfb" }} shadow>
            <Table hoverRow>
              <thead>
                <tr>
                  <th style={{ width: "20%" }}>S.No</th>
                  <th>Class</th>
                  <th>Exam Type</th>
                  <th>Result</th>
                  <th>Roll&nbsp;No</th>
                  <th>Marksheet No.</th>
                  <th>Provider</th>
                  <th>is Distributed</th>
                </tr>
              </thead>
              <tbody>
                {marksheetData && marksheetData.results ? (
                  marksheetData.results.map((row, index) => (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <span>{index + 1}</span>
                          <div className="ms-3">
                            <p className="fw-bold mb-1">John Doe</p>
                            <p className="text-muted mb-0">unique_id </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">Software engineer</p>
                        <p className="text-muted mb-0">IT department</p>
                      </td>
                      <td></td>
                      <td>
                        <MDBBadge color="success" pill>
                          Pass
                        </MDBBadge>
                      </td>
                      <td>Senior</td>
                      <td>
                        <MDBBtn color="link" rounded size="sm">
                          Download
                        </MDBBtn>
                      </td>
                    </tr>
                  ))
                ) : (
                  <Skeleton />
                )}
              </tbody>
            </Table>
          </MDBCol>
        </MDBRow>

        {marksheetData && (
          <MDBRow className="justify-content-center align-items-center rounded p-1 h4">
            No Data Found
          </MDBRow>
        )}
      </MDBContainer>
    </div>
  );
}

<MDBTable align="middle">
  <MDBTableHead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      <th scope="col">Position</th>
      <th scope="col">Actions</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <MDBBadge color="primary" pill>
          Onboarding
        </MDBBadge>
      </td>
      <td>Junior</td>
      <td>
        <MDBBtn color="link" rounded size="sm">
          Edit
        </MDBBtn>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            alt=""
            style={{ width: "45px", height: "45px" }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <MDBBadge color="warning" pill>
          Awaiting
        </MDBBadge>
      </td>
      <td>Senior</td>
      <td>
        <MDBBtn color="link" rounded size="sm">
          Edit
        </MDBBtn>
      </td>
    </tr>
  </MDBTableBody>
</MDBTable>;
