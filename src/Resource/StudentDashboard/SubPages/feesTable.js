import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const FeesTable = () => {
  const receiptData = [
    {
      receiptNo: "NC01SLSFT922100078",
      feeType: "Tuition Fee",
      receiptAmount: 11745.0,
      paymentMode: "Scholarship",
      generatedOn: "24 Dec 2021",
    },
    {
      receiptNo: "NC01SLSFT922000105",
      feeType: "Tuition Fee",
      receiptAmount: 11018.0,
      paymentMode: "Scholarship",
      generatedOn: "03 Dec 2020",
    },
  ];

  return (
    <MDBTable>
      <MDBTableHead dark>
        <tr>
          <th>Receipt No</th>
          <th>Fee Type</th>
          <th>Receipt Amount</th>
          <th>Payment Mode</th>
          <th>Generated On</th>
          <th>Download</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {receiptData.map((receipt, index) => (
          <tr key={index}>
            <td>{receipt.receiptNo}</td>
            <td>{receipt.feeType}</td>
            <td>{receipt.receiptAmount}</td>
            <td>{receipt.paymentMode}</td>
            <td>{receipt.generatedOn}</td>
            <td>
              <Link to={"download"}>Download</Link>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default FeesTable;
