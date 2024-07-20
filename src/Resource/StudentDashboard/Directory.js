import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CommonService from "../../CommonService/CommonService";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "miashok74@gmail.com", 9893989591),
  createData("Ice cream sandwich", "miashok74@gmail.com", 9893989591),
  createData("Eclair", "miashok74@gmail.com", 9893989591),
  createData("Cupcake", "miashok74@gmail.com", 9893989591),
  createData("Gingerbread", "miashok74@gmail.com", 9893989591),
];

export default function Directory() {
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfileData = await CommonService.findAll("teacher");
        setTeacherData(userProfileData);
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
        Directory
      </MDBRow>
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="9" xl="9" style={{ backgroundColor: "#fffbfb" }} shadow>
            <Table hoverRow>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>Name</th>
                  <th style={{ width: "45%" }}>Email</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {teacherData && teacherData.results ? (
                  teacherData.results.map((row) => (
                    <tr key={row.name}>
                      <td>
                        {row.firstName} &nbsp;
                        {row.lastName}
                      </td>
                      <td>{row.email}</td>
                      <td>{row.contact}</td>
                    </tr>
                  ))
                ) : (
                  <h1>no teacher Data Found</h1>
                )}
              </tbody>
            </Table>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
