import "../css/UserProfile.css";
import Collapse from "react-bootstrap/Collapse";
import React, { useEffect, useState } from "react";
import profileImage from "../res_images/userProfile.png";
import { useLocation } from "react-router-dom";

const userRequest = {
  _id: "",
  isDeleted: "",
  created_user: "",
  created_date: "",
  fees: "",
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  role: "",
  userId: "",
  contact: "",
  alternateContact: "",
  category: "",
  samagraId: "",
  bloodGroup: "",
  religion: "",
  nationality: "",
  classId: "",
  studentId: "",
  uid: "",
  bankAccountNo: "",
  familyAnnualIncome: "",
  enrollmentNo: "",
  disabilityType: "",
  disabilityPercentage: "",

  fatherName: "",
  occupationFather: "",
  motherName: "",
  occupationMother: "",
  familyId: "",

  flatDoorBlock: "",
  village: "",
  postOffice: "",
  locality: "",
  state: "",
  zip: "",

  qualification: "",
  passingYear: "",
  board: "",
  marks: "",
  resultPercentage: "",
  schoolCollege: "",
  updated_date: "",
  updated_user: "",
  password: "",
  aadhar: "",

  uuid: "",
  __v: "",
  unique_id: "",
  id: "",
};
// findByTokenDetails

function UserProfile() {
  const [Contact, setContact] = useState(false);
  const [Qualification, setQualification] = useState(false);
  const [Document, setDocument] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(userRequest);

  const location = useLocation();
  console.log(userData);

  useEffect(() => {
    if (location.state && location.state.userProfileData) {
      setUserData(location.state.userProfileData);
    }
  }, [location.state]);

  return (
    <div id="printableDoc" className="shadow-md p-3 mb-5  rounded">
      {userData && userData ? (
        <div className="infoContainer  shadow p-3  bg-white rounded">
          <div>
            <div id="heading">
              <p
                style={{
                  fontSize: "30px",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  backgroundColor: "#B9EDDD",
                  borderRadius: "10px",
                }}>
                {userData.firstName ?? ""}&nbsp; {userData.lastName ?? ""}
              </p>
            </div>

            <hr />

            <table id="profileTable">
              <tr>
                <td rowSpan={13}>
                  <img src={profileImage ?? ""} alt="userProfile"></img>
                  {/* <h5>Ashok Kushwaha</h5> */}
                </td>
              </tr>
              <tr>
                <th>User Name:</th>
                <td>
                  {userData.firstName}&nbsp;
                  {userData.lastName}
                </td>
                <td id="blankCol"></td>
                <th>User Id</th>
                <td> {userData.unique_id}</td>
              </tr>
              <tr>
                <th>Father Name:</th>
                <td>{userData.fatherName} </td>
                <td id="blankCol"></td>
                <th>Occupation:</th>
                <td>{userData.occupationFather}</td>
              </tr>
              <tr>
                <th>Mother Name:</th>
                <td>{userData.motherName}</td>
                <td></td>
                <th>Occupation</th>
                <td>{userData.occupationMother}</td>
              </tr>
              <tr>
                <th>EnrollMent No:</th>
                <td>{userData.enrollmentNo}</td>
                <td id="blankCol"></td>
                <th>Class:</th>
                <td>{userData.classId}</td>
              </tr>
              <tr>
                <th>Admission Date:</th>
                <td>{userData.created_date}</td>
                <td id="blankCol"></td>
                <th>Last Update:</th>
                <td>{userData.updated_date}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{userData.category}</td>
                <td id="blankCol"></td>
                <th>Samagra Id:</th>
                <td>{userData.samagraId}</td>
              </tr>
              <tr>
                <th>fatherName</th>
                <td>{userData.fatherName}</td>
                <td id="blankCol"></td>
                <th>motherName</th>
                <td>{userData.motherName}</td>
              </tr>
              <tr>
                <th>Blood Group</th>
                <td>{userData.bloodGroup}</td>
                <td></td>
                <th>marital Status</th>
                <td>
                  <span>--</span>
                </td>
              </tr>
              <tr>
                <th> Religion </th>
                <td> {userData.religion}</td>
                <td> </td>
                <th> Nationality </th>
                <td> {userData.nationality}</td>
              </tr>
              <tr>
                <th> UID (Aadhar No.)</th>
                <td>{userData.aadhar}</td>
                <td></td>
                <th>Family Id</th>
                <td>{userData.familyId}</td>
              </tr>
              <tr>
                <th>Disability Type</th>
                <td> {userData.disabilityType} </td>
                <td></td>
                <th>Disability Percentage</th>
                <td>{userData.disabilityPercentage}</td>
              </tr>
              <tr>
                <th>Bank Account no</th>
                <td>{userData.bankAccountNo}</td>
                <td></td>
                <th>Family Annual Income</th>
                <td>{userData.familyAnnualIncome}</td>
              </tr>
            </table>
          </div>

          {/* //this is CollapseHeading button  */}

          <div onClick={() => setContact(!Contact)} className="CatButton">
            <p aria-controls="ContactInfo" aria-expanded={Contact}>
              Contact Information
            </p>
            <Collapse in={Contact}>
              <div id="ContactInfo">
                <table>
                  <tr>
                    <th>Flat/Door/Block:</th>
                    <td>{userData.flatDoorBlock}</td>
                    <th>Village/Street:</th>

                    <td>{userData.city}</td>
                  </tr>
                  <tr>
                    <th>Post Office/Area:</th>
                    <td>{userData.postOffice}</td>

                    <th>Locality:</th>
                    <td>{userData.locality}</td>
                  </tr>
                  <tr>
                    <th>State:</th>
                    <td>{userData.state}</td>

                    <th>Zip Code:</th>
                    <td>{userData.zip}</td>
                  </tr>

                  <tr>
                    <th>Mobile No:</th>
                    <td>{userData.contact}</td>

                    <th>Phone No:</th>
                    <td>{userData.alternateContact}</td>
                  </tr>

                  <tr>
                    <th>Primary Email:</th>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <th>Last Update:</th>
                    <td>{userData.updated_date}</td>
                    <th>updated By</th>
                    <td>{userData.updated_user}</td>
                  </tr>
                </table>
              </div>
            </Collapse>
          </div>

          <div
            className="CatButton "
            onClick={() => setQualification(!Qualification)}>
            <p aria-controls="QualificationInfo" aria-expanded={Qualification}>
              Qualification Information
            </p>
            <Collapse in={Qualification}>
              <div id="QualificationInfo">
                <table>
                  <tr>
                    <th>Qualification</th>
                    <th>Passing Year</th>
                    <th>Board/University</th>
                    <th>Marks</th>
                    <th>Result/Percentage</th>
                    <th>School/College</th>
                  </tr>
                  <tr>
                    <td>{userData.qualification}</td>
                    <td>{userData.passingYear}</td>
                    <td>{userData.board}</td>
                    <td>{userData.marks}</td>
                    <td>{userData.resultPercentage}</td>
                    <td>{userData.schoolName}</td>
                  </tr>
                </table>
              </div>
            </Collapse>
          </div>
          <div className="CatButton" onClick={() => setDocument(!Document)}>
            <p aria-controls="DocumentInfo" aria-expanded={Document}>
              Document Information
            </p>
            <Collapse in={Document}>
              <div id="DocumentInfo">
                <table>
                  <tr>
                    <th>Document</th>
                    <th>Document No</th>
                    <th>Issue Date</th>
                    <th>Issued Authority</th>
                    <th>Validity From</th>
                    <th>Validity to</th>
                    <th>Verify</th>
                    <th>Verify By</th>
                  </tr>
                  <tr>
                    <td>TRANSFER CERTIFICATE</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>&#10004;</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>CHARACTER CERTIFICATE</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>&#10004;</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>MARKSHEET</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>&#10004;</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>AADHAR</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>&#10004;</td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </Collapse>
          </div>
          <div className="CatButton" onClick={() => setOpen(!open)}>
            <p
              onClick={() => setOpen(!open)}
              aria-controls="StudentRemark"
              aria-expanded={open}>
              User Remark
            </p>
            <Collapse in={open}>
              <div id="StudentRemark">
                <table style={{ color: "gray", marginTop: "10px" }}>
                  <h5>Not Available</h5>
                </table>
              </div>
            </Collapse>
          </div>
        </div>
      ) : (
        <h1>"User Data Not Found"</h1>
      )}
    </div>
  );
}

export default UserProfile;
