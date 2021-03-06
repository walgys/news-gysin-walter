import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Skeleton from "@material-ui/lab/Skeleton"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

const styles = (theme) => ({
  root: {
    minWidth: 250,
    minHeight: 350,
    maxHeight: 350,
  },
  media: {
    height: 140,
  },
  content: {
    height: 120,
    fontFamily: "Georgia",
    fontSize: 14,
    fontWeight: 800,
  },
  button: {
    borderTop: "1px solid #DDD",
    justifyContent: "center",
  },
  noImage: {
    height: 120,
    display: "block",
    textAlign: "center",
    background: "linear-gradient(0.9turn,#e66465, #9198e5)",
    paddingTop: 20,
  },
})

const SkeletonCardItem = (props) => {
  const { classes } = props
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Skeleton animation="wave" variant={"rect"} className={classes.media} />
        <CardContent className={classes.content}>
          <Skeleton animation="wave" height={14} style={{ marginBottom: 10 }} />
          <Skeleton animation="wave" height={14} style={{ marginBottom: 10 }} />
          <Skeleton animation="wave" height={14} style={{ marginBottom: 10 }} />
          <Skeleton animation="wave" height={14} style={{ marginBottom: 10 }} />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Skeleton
          animation="wave"
          variant={"rect"}
          width={100}
          height={30}
          style={{ marginTop: 5 }}
        />
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(SkeletonCardItem)
