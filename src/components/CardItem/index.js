import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
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
    width: "100%",
  },
  content: {
    height: 120,
    fontFamily: "Georgia",
    fontSize: 14,
    fontWeight: 800,
  },
  source: {
    height: 20,
    fontFamily: "Georgia",
    fontSize: 14,
    fontWeight: 500,
  },
  button: {
    justifyContent: "center",
    borderTop: "1px solid #DDD",
    paddingTop: "15px",
  },

  noImage: {
    height: 120,
    display: "block",
    textAlign: "center",
    background: "linear-gradient(0.9turn,#e66465, #9198e5)",
    paddingTop: 20,
  },
})

const CardItem = (props) => {
  const { newsItem, onLoad } = props
  const [errorImg, seterrorImg] = useState(false)

  const classes = useStyles()
  const NoImageMedia = () => {
    return (
      <div className={classes.noImage}>
        <img height="70" src={megaphone} alt="Logo" onLoad={onLoad} />
        <h3>News Feeds Central</h3>
      </div>
    )
  }
  const onError = () => {
    seterrorImg(true)
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(newsItem.url)}>
        {!newsItem.img_url ? (
          <NoImageMedia />
        ) : (
          <>
            {!errorImg && (
              <img
                className={classes.media}
                src={newsItem.img_url}
                alt="imagen"
                onLoad={onLoad}
                onError={onError}
              />
            )}
            {errorImg && <NoImageMedia />}
          </>
        )}
        <CardContent className={classes.content}>
          <Typography className={classes.source} gutterBottom component="h5">
            {newsItem.source_name}
          </Typography>
          <Typography className={classes.content} gutterBottom component="h2">
            {newsItem.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(newsItem.url)}
        >
          VER MAS
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
