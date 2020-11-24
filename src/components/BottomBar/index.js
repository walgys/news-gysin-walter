import React from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import { Typography } from "@material-ui/core"

const styles = (theme) => ({
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
})

class BottomAppBar extends React.Component {

  render(){
    const {classes} = this.props
    const getSection = () => {
      try {
        if(this.props.categories.find(item=> item.link.includes(this.props.location.pathname.split('/')[1])) !== 'undefined'){
          return this.props.categories.find(item=> item.link.includes(this.props.location.pathname.split('/')[1])).label
        }else{
          return 'unknown'
        }
       }catch(err){
         console.log(err)
       }}
      
    return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Typography className={classes.label} align={"center"}>
          {getSection()}
        </Typography>
      </AppBar>
    </React.Fragment>
  )
  }
  
}

function mapStateToProps(state) {
  
  return { categories: state.categories }
}

export default withStyles(styles)(connect(mapStateToProps)(withRouter(BottomAppBar)))
