import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import { Link} from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import * as actions from "../../actions"

const styles = (theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  })

const Menu = (props) => {
  
  const {classes, categories, location, dispatch} = props

  const locationID = typeof categories.find((cat) =>
    cat.link.includes(location.pathname.split("/")[1])
  ) !== 'undefined' ? categories.find((cat) =>
  cat.link.includes(location.pathname.split("/")[1])
).id : 0

const onClick = (id) => {
  dispatch(actions.closeModal())
}
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
              onClick={() => onClick(tab.id)}
              to={tab.link}
              
            />
          ) : null
        )}
      </Tabs>
    </div>
  )
}
const mapStateToProps = (state) => ({ categories: state.categories})

export default withStyles(styles)(connect(mapStateToProps)(withRouter(Menu)))
