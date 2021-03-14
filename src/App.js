import "./styles.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "orange",
    fontSize: "30px"
  },
  buttonStyle: {
    color: "green"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.helloThereStyle}>Hello there</Typography>
      <Button
        className={classes.buttonStyle}
        variant="outlined"
        color="secondary"
      >
        My Button
      </Button>
    </div>
  );
}
