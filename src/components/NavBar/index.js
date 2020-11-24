import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import { Link, withRouter } from "react-router-dom"
import * as actions from '../../actions'

const styles = (theme) => ({
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
})

const NavBar = (props) => {
  const { location, categories, dispatch} = props

  const locationID = typeof categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
  ) !== 'undefined' ? categories.find((cat) =>
  cat.link.includes(location.pathname.split("/")[1])
).id : 0

  const { classes } = props
  const onClick = (id) => {
    dispatch(actions.closeModal())
    dispatch(actions.setLocation(id))
  }
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
              onClick={() => onClick(tab.id)}
              to={tab.link}
            />
          ) : <Tab
          className={classes.tabInvisible}
          key={tab.label}
          label={tab.label}
          value={tab.id}
          component={Link}
          onClick={() => onClick(tab.id)}
          to={tab.link}
        />
        )}
      </Tabs>
    </div>
  )
}

const mapStateToProps = (state) => ({categories: state.categories})

export default withStyles(styles)(connect(mapStateToProps)(withRouter(NavBar)))
