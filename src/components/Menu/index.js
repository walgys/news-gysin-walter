import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions";

const Menu = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  const classes = useStyles();

  const allTabs = useSelector((state) => state.categories);
  const { location } = useSelector((state) => state.navigation);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={location}
        onChange={(event, newValue) => dispatch(actions.setLocation(newValue))}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {allTabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            value={tab.link}
            component={Link}
            to={tab.link}
            onClick={() => dispatch(actions.closeModal())}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
