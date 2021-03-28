import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import classnames from "classnames"
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

    [theme.breakpoints.up("sm")]: {
      color: "black",
    },
  },
  backgroundStyles:{
    background: "black",

    [theme.breakpoints.up("sm")]: {
      background: "grey",
    },
  }
}));
const ButtonStyleTest = () => {
  const classes = useStyles();
  return (
    <div>
      <Button fullWidth className={classnames(classes.buttonSyles,classes.backgroundStyles)}>This is button</Button>
    </div>
  );
};

export default ButtonStyleTest;
