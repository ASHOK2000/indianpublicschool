import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import FeesTable from "./SubPages/feesTable";
import CommonService from "../../CommonService/CommonService";

export default function StudentFees() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfileData = await CommonService.findByTokenDetails("user");
        setUserData(userProfileData);
        console.log(userProfileData, "user profile");
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
        Fees
      </MDBRow>

      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "100px" }}>
                <div className="ms-3" style={{ marginTop: "30px" }}>
                  <MDBTypography tag="h5">
                    {userData.firstName}
                    {userData.lastName}
                  </MDBTypography>
                  <MDBCardText>{userData.classDetails.name}</MDBCardText>
                </div>
              </div>

              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Fees Details</p>

                  <MDBCol lg="12">
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        {/* <MDBRow>
                          <MDBCol sm="4">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="8">
                            <MDBCardText className="text-muted">
                              Johnatan Smith
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow> */}

                        {/* <hr /> */}
                        <MDBRow>
                          <MDBCol sm="4">
                            <MDBCardText>Student Id</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="8">
                            <MDBCardText className="text-muted">
                              Admin2024
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="4">
                            <MDBCardText>Fees&nbsp;Amount</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="8">
                            <MDBCardText className="text-muted">
                              10000
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="4">
                            <MDBCardText>fees Type</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="8">
                            <MDBCardText className="text-muted">
                              Admission | tuition | exam
                            </MDBCardText>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Recent Transactions
                  </MDBCardText>
                  <MDBCardText className="mb-0">
                    <a href="#!" className="text-muted">
                      Show all
                    </a>
                  </MDBCardText>
                </div>
                <MDBRow>
                  <FeesTable />
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
