import React, { useEffect } from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import * as actions from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
    width: "100%",

    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  tabs: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "0.85rem",
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
      display: "flex",
    },

    minWidth: 100,
  },
  tabInvisible: {
    display: 'none'
  },
}))

const NavBar = (props) => {
  const location = useLocation()
  const categories = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  const locationID = typeof categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
  ) !== 'undefined' ? categories.find((cat) =>
  cat.link.includes(location.pathname.split("/")[1])
).id : 0


  useEffect(() => {
    
    dispatch(actions.setLocation(locationID))
  }, [location, dispatch, locationID])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Tabs value={locationID} centered={true}>
        {categories.map((tab) =>
          tab.visible ? (
            <Tab
              className={classes.tabs}
              key={tab.label}
              label={tab.label}
              value={tab.id}
              component={Link}
              to={tab.link}
            />
          ) : <Tab
          className={classes.tabInvisible}
          key={tab.label}
          label={tab.label}
          value={tab.id}
          component={Link}
          to={tab.link}
        />
        )}
      </Tabs>
    </div>
  )
}

export default NavBar
