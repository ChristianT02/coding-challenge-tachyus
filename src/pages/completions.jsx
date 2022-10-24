import { Grid } from "@mui/material";
import React from "react";
import TableCompletions from "../components/table/TableCompletions";
import completions from "./../data/csv/completions.csv";

const Completions = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <TableCompletions source={completions} />
      </Grid>
    </Grid>
  );
};

export default Completions;
