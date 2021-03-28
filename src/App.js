import {Grid } from "@material-ui/core";
import "./styles.css";
import Header from "./Components/Header/Header";
import CardSection from "./Components/CardSection/CardSection"
import ButtonStyleTest from "./Components/ButtonStyleTest";

export default function App() {
  return (
    // <Grid container direction="column">
    // <Grid item>
    //   <Header />
    // </Grid>
    //   <Grid item container>
    //     <Grid item xs={0} sm={2}/>
    //     <Grid item xs={12} sm={8}>
    //       <CardSection/>
    //     </Grid>
    //     <Grid item xs={0} sm={2}/>
    //   </Grid>
    // </Grid>
    <ButtonStyleTest/>
  );
}
