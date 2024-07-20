import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { useState, useEffect, useRef } from "react";
import CommonService from "../../../CommonService/CommonService";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 800,
  height: 600,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const valueFormatter = (value) => `${value}mm`;

export default function YearChart() {
  const [totalFeesCount, setTotalFeesCount] = useState(null); //hold the student List

  useEffect(() => {
    fetchClassData();
  }, []);

  const fetchClassData = async () => {
    try {
      const feeses = await CommonService.findAll("fees/feesCount");

      setTotalFeesCount(feeses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const yeardata = totalFeesCount?.yearData;
  function transformYearDataToDataset(yeardata) {
    const transformedData = yearData.map((data) => {
      const month = getMonthFromId(data._id);
      return {
        income: data.totalFees,
        loss: getRandomLoss(), // You need to define or get appropriate loss data
        month: month,
      };
    });

    return transformedData;
  }

  function getMonthFromId(id) {
    // Extract the month from the "_id" field
    const monthNumber = parseInt(id.split("-")[1]);
    // Assuming you have an array of month names
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    // Return the corresponding month name
    return months[monthNumber - 1];
  }

  function getRandomLoss() {
    // You need to define or get appropriate logic for generating random loss data
    // This is just a placeholder
    return Math.floor(Math.random() * 10000);
  }

  // Example usage
  const yearData = [
    {
      _id: "2024-01",
      totalFees: 1000,
    },
    {
      _id: "2024-02",
      totalFees: 1397,
    },
  ];

  const transformedDataset = transformYearDataToDataset(yearData);

  return (
    <BarChart
      dataset={transformedDataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "income",
          label: "income",
          valueFormatter,
          color: "#14f986cd",
        },
        { dataKey: "loss", label: "loss", valueFormatter, color: "#e70000d9" },
      ]}
      {...chartSetting}
    />
  );
}
