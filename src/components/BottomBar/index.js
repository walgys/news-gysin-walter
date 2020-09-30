import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Typography align={"center"}>{value}</Typography>
      </AppBar>
    </React.Fragment>
  );
}
