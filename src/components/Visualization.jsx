import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import BaseCard from "./baseCard/BaseCard";

const Visualization = ({ source, title }) => {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const array = source
      .sort((a, b) => a.Month - b.Month)
      .map((item) => [`${item.Month}`, item.Qw, item.Qg, item.Qo, item.Qs]);

    const data = [["Month", "Water", "Gas", "Oil", "WaterInj"], ...array];

    setDataChart(data);
  }, [source]);

  const options = {
    hAxis: {
      title: "Months",
    },
    vAxis: {
      title: "Rate taking",
    },
    series: {
      1: { curveType: "function" },
    },
    backgroundColor: "#F8F5FF",
  };

  return (
    <BaseCard title="Visualization of the Rate for different energies over time">
      <Stack mb={4}>
        <Typography color="textSecondary" variant="caption">
          Selected
        </Typography>
        <Typography variant="h5">{title}</Typography>
      </Stack>

      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        style={{ minHeight: 600, minWidth: 600 }}
        data={dataChart}
        options={options}
      />
    </BaseCard>
  );
};

export default Visualization;
