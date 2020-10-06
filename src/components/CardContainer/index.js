import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import CardItem from "../CardItem"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 140,
  },
}))

const CardContainer = (props) => {
  const { news } = props
  const classes = useStyles()
  const [cantLoaded, setcantLoaded] = useState(0)

  return (
    <div className={classes.root}>
      <Grid container justify={"center"} spacing={3}>
        {news &&
          news.map((newsItem) => (
            <Grid key={newsItem.news_id} item xs={"auto"}>
              <CardItem newsItem={newsItem} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

export default CardContainer
