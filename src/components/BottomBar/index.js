import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import { Typography } from "@material-ui/core"
import { useLocation } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    top: "auto",
    bottom: 0,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  label: {
    fontSize: "0.8rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  const categories = useSelector((state) => state.categories)
  const [value, setValue] = useState()
  const location = useLocation()

  useEffect(() => {
    setValue(
      categories.find((item) =>
        item.link.includes(location.pathname.split("/")[0])
      ).label
    )
  }, [location, categories])

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Typography className={classes.label} align={"center"}>
          {value}
        </Typography>
      </AppBar>
    </React.Fragment>
  )
}
