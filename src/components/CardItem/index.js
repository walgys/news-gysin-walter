import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import megaphone from "../../images/megaphone.svg"

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
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
    display: "flex",
    alignItems: "flex-end",
  },
  noImage: {
    height: 120,
    display: "block",
    textAlign: "center",
    background: "linear-gradient(0.9turn,#e66465, #9198e5)",
    paddingTop: 20,
  },
})

const NoImageMedia = () => {
  const classes = useStyles()
  return (
    <div className={classes.noImage}>
      <img height="70" src={megaphone} alt="Logo" onLoad={loadedCard} />
      <h3>News Feeds Central</h3>
    </div>
  )
}

const loadedCard = () => {
  console.log("IMG Loaded")
}

const CardItem = (props) => {
  const { newsItem } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {!newsItem.img_url ? (
          <NoImageMedia />
        ) : (
          <img
            className={classes.media}
            src={newsItem.img_url}
            alt="imagen"
            onLoad={loadedCard}
          />
        )}
        <CardContent className={classes.content}>
          <Typography className={classes.content} gutterBottom component="h2">
            {newsItem.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
