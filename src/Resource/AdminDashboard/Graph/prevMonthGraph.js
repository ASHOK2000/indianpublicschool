import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";
import { Container } from "react-bootstrap";
import CommonService from "../../../CommonService/CommonService";

export default function StraightAnglePieChart() {
  const [feesNumber, setFeesNumber] = React.useState("");

  const items = [
    { id: "income", value: feesNumber.PreviousMonth, label: "Income" },
    { id: "total", value: 20000, label: "Total" },
  ];

  React.useEffect(() => {
    const userData = async () => {
      try {
        const getFeesDetails = await CommonService.findAll("fees/feesCount");
        setFeesNumber(getFeesDetails);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    userData();
  }, []);

  return (
    <Container>
      <h4>Pervious Month Income</h4>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}>
        <PieChart
          style={{ minWidth: "20rem", minHeight: "10rem" }}
          series={[
            {
              data: items,
            },
          ]}
          width={400}
          height={200}
          margin={{ right: 200 }}
        />
      </Stack>
    </Container>
  );
}
