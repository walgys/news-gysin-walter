import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

const allTabs = [
  { link: "/", label: "Home" },
  { link: "/Politics", label: "Política" },
  { link: "/International", label: "Internacionales" },
  { link: "/Tech", label: "Tecnología" },
  { link: "/Shows", label: "Espectáculos" },
  { link: "/Sports", label: "Deportes" },
  { link: "/Design", label: "Diseño" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavBar = (props) => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Tabs value={value} centered={true}>
          {allTabs.map((tab) => (
            <Tab
              key={tab.label}
              label={tab.label}
              value={tab.link}
              component={Link}
              to={tab.link}
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NavBar;
