import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";
import CommonService from "./../../../CommonService/CommonService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReactVirtualizedTable() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
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

  return (
    <Container>
      <h3>Latest Admisson Request</h3>
      <TableContainer component={Paper} style={{ maxHeight: "32rem" }}>
        <Table
          sx={{ minWidth: 345, maxHeight: 400 }}
          aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Request Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((value) => (
              <StyledTableRow key={value.firstName}>
                <StyledTableCell component="th" scope="row">
                  {value.firstName}
                </StyledTableCell>
                <StyledTableCell align="right">{value.contact}</StyledTableCell>
                <StyledTableCell align="right">
                  {new Date(value.created_date).toLocaleString()}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
