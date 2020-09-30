import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Menu = (props) => {
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
  const { value, handleChange, toggleDrawer } = props;

  const allTabs = [
    { link: "/", label: "Home" },
    { link: "/Politics", label: "Política" },
    { link: "/International", label: "Internacionales" },
    { link: "/Tech", label: "Tecnología" },
    { link: "/Shows", label: "Espectáculos" },
    { link: "/Sports", label: "Deportes" },
    { link: "/Design", label: "Diseño" },
  ];

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
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
            onClick={toggleDrawer(false)}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
