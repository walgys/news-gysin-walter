import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Category from "../../pages/Category";

const View = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:slug" component={Category} />
    </Switch>
  );
};

export default View;
