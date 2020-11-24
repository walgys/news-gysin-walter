import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Design from "../../pages/Design"
import Home from "../../pages/Home"
import International from "../../pages/International"
import Politics from "../../pages/Politics"
import Search from "../../pages/Search"
import Shows from "../../pages/Shows"
import Sports from "../../pages/Sports"
import Tech from "../../pages/Tech"

const View = () => {
 
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route exact path={`${process.env.PUBLIC_URL}/search/:id` }component={Search} />
      <Route exact path={`${process.env.PUBLIC_URL}/Politics`} component={Politics} />
      <Route exact path={`${process.env.PUBLIC_URL}/International`} component={International} />
      <Route exact path={`${process.env.PUBLIC_URL}/Tech`} component={Tech} />
      <Route exact path={`${process.env.PUBLIC_URL}/Shows`} component={Shows} />
      <Route exact path={`${process.env.PUBLIC_URL}/Sports`} component={Sports} />
      <Route exact path={`${process.env.PUBLIC_URL}/Design`} component={Design} />
      <Route render={() => (<Redirect to={`${process.env.PUBLIC_URL}/`}/>)} />
    </Switch>
  )
}

export default View
