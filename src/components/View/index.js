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
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:id" component={Search} />
      <Route exact path="/Politics" component={Politics} />
      <Route exact path="/International" component={International} />
      <Route exact path="/Tech" component={Tech} />
      <Route exact path="/Shows" component={Shows} />
      <Route exact path="/Sports" component={Sports} />
      <Route exact path="/Design" component={Design} />
      <Route path="/" render={() => (<Redirect to="/"/>)} />
    </Switch>
  )
}

export default View
