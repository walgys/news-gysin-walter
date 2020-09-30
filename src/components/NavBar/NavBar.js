import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Category from "../../pages/Category";
import Home from "../../pages/Home";
import { Switch, Route, Link } from "react-router-dom";

const allTabs = [
  { link: "/", label: "Home" },
  { link: "/Politics", label: "Política" },
  { link: "/International", label: "Internacionales" },
  { link: "/Tech", label: "Tecnología" },
  { link: "/Shows", label: "Espectáculos" },
  { link: "/Sports", label: "Deportes" },
  { link: "/Design", label: "Diseño" },
];

const NavBar = () => (
  <div>
    <Route
      path="/"
      render={({ location }) => (
        <>
          <Tabs value={location.pathname} centered={true}>
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:slug" component={Category} />
          </Switch>
        </>
      )}
    />
  </div>
);

export default NavBar;
