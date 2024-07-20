import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TransferCertificate from "./Graph/TCgraph";

import OnSeriesItemClick from "./Graph/CurrentMonthIncomeGraph";
import StraightAnglePieChart from "./Graph/prevMonthGraph";
import ReactVirtualizedTable from "./Graph/AdmissionRequestList";
import YearChart from "./Graph/Year_Chart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DashboardPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <OnSeriesItemClick />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <StraightAnglePieChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item style={{ padding: "10px" }}>
            <TransferCertificate />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{ padding: "10px" }}>
            {" "}
            <YearChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            {" "}
            <ReactVirtualizedTable />{" "}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
