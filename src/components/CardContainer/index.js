import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core/styles"
import CardItem from "../CardItem"
import SkeletonCard from "../SkeletonCard"
import Grid from "@material-ui/core/Grid"
import * as actions from "../../actions"
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 140,
  },
  noDisplay: {
    display: "none",
  },
}))

const CardContainer = (props) => {
  const { news } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)
  let count = 0
  const onLoad = () => {
    count += 1
    if (count === news.length) {
      dispatch(actions.loadingFinished())
      count = 0
    }
  }

  return (
    <>
      {loading && (
        <div className={classes.root}>
          <Grid container justify={"center"} spacing={3}>
            {[...Array(10).keys()].map((newsItem) => (
              <Grid key={newsItem} item xs={"auto"}>
                <SkeletonCard newsItem={newsItem} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
      <div className={loading ? classes.noDisplay : classes.root}>
        <Grid container justify={"center"} spacing={3}>
          {news &&
            news.map((newsItem) => (
              <Grid key={newsItem.news_id} item xs={"auto"}>
                <CardItem newsItem={newsItem} onLoad={onLoad} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  )
}

export default CardContainer
