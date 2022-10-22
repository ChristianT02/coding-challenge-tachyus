import { Grid } from "@mui/material";
import TableCompletions from "../components/table/TableCompletions";
import TableProduction from "../components/table/TableProduction";
import Visualization from "../components/Visualization";
import completions from "./../data/csv/completions.csv";
import production from "./../data/csv/production.csv";
export default function Home() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={6}>
        <TableProduction
          source={production.map((item) => ({ ...item, gross: +item.Qw + +item.Qo }))}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Visualization dataRowP={production} />
      </Grid>
      <Grid item xs={12} lg={12}>
        <TableCompletions source={completions} />
      </Grid>
    </Grid>
  );
}
