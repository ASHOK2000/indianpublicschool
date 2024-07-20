import React, { useEffect, useState } from "react";

import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import CommonService from "../../CommonService/CommonService";
import ListSkeleton from "../../Loaders/ListSkeleton";

export default function AdmissionRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admissionRequest`,
          {
            headers: {
              // Authorization: `Bearer ${Token}`, // Include token in headers
            },
          }
        );
        const tokenDetails = await CommonService.tokenDetails();
        if (tokenDetails.role === "Admin") {
          const responseData = await response.json();
          setData(responseData.results);
          return responseData;
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  if (data) {
    console.log(data.results, "this is data from admission ");
  }

  return (
    <div>
      <div className="noticeHeading">
        <h3>Admission Request !</h3>
      </div>

      {data && data ? (
        <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th>S.No </th>
              <th>Student Name</th>
              <th>Req. Id</th>
              <th>Class</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Req Date/Time</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data &&
              data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.created_user} </td> <td>{item.currentClass} </td>
                  <td>{item.contact} </td>
                  <td>{item.email}</td>
                  <td>
                    {item.address},{item.city},{item.district},{item.zip}{" "}
                  </td>
                  <td>{new Date(item.created_date).toLocaleString()}</td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      ) : (
        <ListSkeleton />
      )}
    </div>
  );
}
