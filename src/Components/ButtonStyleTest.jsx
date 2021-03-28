import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

// const useStyles = makeStyles({
//   buttonSyles: bool => {
//     return {
//       color: bool ? "blue" : "white",
//       backgroundColor: bool ? "White" : "black",
//     };
//   },
// });
// const ButtonStyleTest = ({bool, restProps}) => {
//   const classes = useStyles(bool);

//Lets try theme from material UI with breakpoints

const useStyles = makeStyles((theme) => ({
  buttonSyles: {
    color: "white",
    background: "black",

    [theme.breakpoints.up("sm")]: {
      color: "black",
      background: "grey",
    },
  },
}));
const ButtonStyleTest = () => {
  const classes = useStyles();
  return (
    <div>
      <Button fullWidth className={classes.buttonSyles}>This is button</Button>
    </div>
  );
};

export default ButtonStyleTest;
