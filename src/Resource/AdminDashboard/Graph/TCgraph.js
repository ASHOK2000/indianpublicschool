import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Stack } from "@mui/material";
import { Container } from "react-bootstrap";

const items = [
  { id: "id_B", value: 150, label: "Admission", color: "green" },
  { id: "id_C", value: 200, label: "T.C.", color: "gray" },
];

export default function TransferCertificate() {
  return (
    <Container>
      <h4> T.C. / Admission</h4>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{ width: "100%" }}>
        <Typography
          component="pre"
          sx={{
            maxWidth: { xs: "100%", md: "50%", flexShrink: 1 },
            overflow: "auto",
          }}></Typography>
        <PieChart
          series={[
            {
              data: items,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 2,
              cornerRadius: 2,
              startAngle: -180,
              endAngle: 180,
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
