import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link, useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../actions"

const Menu = () => {
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
  }))
  const classes = useStyles()

  const categories = useSelector((state) => state.categories)
  const location = useLocation()
  const dispatch = useDispatch()
  const locationID = typeof categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
  ) !== 'undefined' ? categories.find((cat) =>
  cat.link.includes(location.pathname.split("/")[1])
).id : 0
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={locationID}
        onChange={(event, newValue) => {
          dispatch(actions.setLocation(newValue))
        }}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {categories.map((tab) =>
          tab.visible ? (
            <Tab
              key={tab.label}
              label={tab.label}
              value={tab.id}
              component={Link}
              to={tab.link}
              onClick={() => dispatch(actions.closeModal())}
            />
          ) : null
        )}
      </Tabs>
    </div>
  )
}

export default Menu
