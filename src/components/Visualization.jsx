import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import BaseCard from "./baseCard/BaseCard";

const Visualization = ({ dataRowP }) => {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    const groupByYear = dataRowP
      .sort((a, b) => a.Year - b.Year)
      .reduce((group, current) => {
        const key = `${current.Year}`;

        group[key] = {
          Qw: (group[key]?.Qw ?? 0) + current.Qw,
          Qg: (group[key]?.Qg ?? 0) + current.Qg,
          Qo: (group[key]?.Qo ?? 0) + current.Qo,
          Qs: (group[key]?.Qs ?? 0) + current.Qs,
        };

        return group;
      }, {});

    const array = Object.entries(groupByYear).map((item) => {
      const [key, values] = item;
      return [`${key}`, values.Qw, values.Qg, values.Qo, values.Qs];
    });

    const data = [["Year", "Water", "Gas", "Oil", "WaterInj"], ...array];

    setDataChart(data);
  }, [dataRowP]);

  const options = {
    hAxis: {
      title: "Years",
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
