import React from "react"
import { Switch, Route} from "react-router-dom"
import Home from "../../pages/Home"
import Category from "../../pages/Category"
import Search from "../../pages/Search"

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
