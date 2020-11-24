import React from "react"
import { connect } from "react-redux"
import { withStyles } from "@material-ui/core/styles"
import CardItem from "../CardItem"
import SkeletonCard from "../SkeletonCard"
import Grid from "@material-ui/core/Grid"
import * as actions from "../../actions"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 130,
    [theme.breakpoints.down("sm")]: {
      marginTop: 80,
    },
  },
  noDisplay: {
    display: "none",
  },
})

const CardContainer = (props) => {
  const { news } = props
  const {classes} = props
  const {dispatch} = props
  const {loading} = props
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
const mapStateToProps = (state) =>{
  return { loading: state.loading }
}


export default withStyles(styles)(connect(mapStateToProps)(CardContainer))
