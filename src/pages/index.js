import { Grid } from "@mui/material";
import { useState } from "react";
import TableCompletions from "../components/table/TableCompletions";
import TableProduction from "../components/table/TableProduction";
import Visualization from "../components/Visualization";
import completions from "./../data/csv/completions.csv";
import production from "./../data/csv/production.csv";
export default function Home() {
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
        <Visualization
          title={name}
          source={production.filter((item) => item.wellAPI === wellAPI)}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <TableProduction
          source={production.map((item) => ({ ...item, gross: +item.Qw + +item.Qo }))}
        />
      </Grid>
    </Grid>
  );
}
