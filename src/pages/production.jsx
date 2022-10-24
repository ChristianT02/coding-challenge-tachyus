import { Grid } from "@mui/material";
import React from "react";
import TableProduction from "../components/table/TableProduction";
import production from "./../data/csv/production.csv";

const Production = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <TableProduction
          source={production.map((item) => ({ ...item, gross: +item.Qw + +item.Qo }))}
        />
      </Grid>
    </Grid>
  );
};

export default Production;
