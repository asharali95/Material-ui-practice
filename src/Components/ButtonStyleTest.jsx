import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonSyles: bool => {
    return {
      color: bool ? "blue" : "white",
      backgroundColor: bool ? "White" : "black",
    };
  },
});
const ButtonStyleTest = ({bool, restProps}) => {
  const classes = useStyles(bool);
  return (
    <div>
      <Button disabled={!bool} className={classes.buttonSyles}>This is button</Button>
    </div>
  );
};

export default ButtonStyleTest;
