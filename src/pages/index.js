import { Grid } from "@mui/material";
import TableProduction from "../components/table/TableProduction";
import Visualization from "../components/Visualization";
import completions from "./../data/csv/completions.csv";
import production from "./../data/csv/production.csv";
export default function Home() {
  return (
    <Grid container spacing={0}>
      <Visualization />
      <Grid item xs={12} lg={12}>
        <TableProduction
          source={production.map((item) => ({ ...item, gross: +item.Qw + +item.Qo }))}
        />
      </Grid>
    </Grid>
  );
}
