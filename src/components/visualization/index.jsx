import { Grid } from "@mui/material";
import React, { useState } from "react";
import TableCompletions from "../table/TableCompletions";
import production from "../../data/csv/production.csv";
import completions from "../../data/csv/completions.csv";
import Chart from "../chart";

const Visualization = () => {
  const [wellAPI, setWellAPI] = useState(completions[0].wellAPI);
  const [name, setName] = useState(completions[0].wellName);

  function onSelected(params) {
    setWellAPI(params.wellAPI);
    setName(params.name);
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={6}>
        <TableCompletions onSelected={onSelected} source={completions} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Chart title={name} source={production.filter((item) => item.wellAPI === wellAPI)} />
      </Grid>
    </Grid>
  );
};

export default Visualization;
