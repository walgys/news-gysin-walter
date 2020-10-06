import React, { useEffect } from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import * as actions from "../../actions"
import { useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useLocation } from "react-router-dom"

const allTabs = [
  { link: "/", label: "Home" },
  { link: "/Politics", label: "Política" },
  { link: "/International", label: "Internacionales" },
  { link: "/Tech", label: "Tecnología" },
  { link: "/Shows", label: "Espectáculos" },
  { link: "/Sports", label: "Deportes" },
  { link: "/Design", label: "Diseño" },
]

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.55rem",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },

    minWidth: 100,
  },
}))

const NavBar = (props) => {
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setLocation(location.pathname))
  }, [location, dispatch])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Tabs value={location.pathname} centered={true}>
        {allTabs.map((tab) => (
          <Tab
            className={classes.tabs}
            key={tab.label}
            label={tab.label}
            value={tab.link}
            component={Link}
            to={tab.link}
          />
        ))}
      </Tabs>
    </div>
  )
}

export default NavBar
