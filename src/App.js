import { Grid } from "@material-ui/core";
import "./styles.css";

export default function App() {
  return (
   <Grid container direction = "column">
    <Grid item container>
      <Grid item xs={0} sm={2}/>
      <Grid item sm={8} xs={12} >
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        This is material UI
        </Grid>
      <Grid item xs={0} sm={2}/>
    </Grid>
   </Grid>
  );
}
