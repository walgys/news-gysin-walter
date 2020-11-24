import React from "react"
import { Link, withRouter } from "react-router-dom"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import { fade, withStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import { Button } from "@material-ui/core"
import * as actions from "../../actions"
import { connect } from "react-redux"
import NavBar from "../NavBar"

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: "auto",
    /*  marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    }, */
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "8ch",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "18ch",
      },
    },
  },
})

class SearchAppBar extends React.Component {
  state = {
    searchText: ''
  }
   executeSearch = () => {
     const { searchText } = this.state
     const { dispatch, history } = this.props
    if (searchText.length > 0) {
      dispatch(actions.setLocation(7))
      history.push(`${process.env.PUBLIC_URL}/search/` + searchText)
      this.setState({ searchText: '' })
    }
  }
  onChange = (value) => {
    this.setState({ searchText: value})
  }
  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.executeSearch()
    }
  }
  render(){
    const { classes, dispatch} = this.props
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => dispatch(actions.openModal())}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Button component={Link} variant={"text"} to={"/"} color="inherit">
              News Feeds Central
            </Button>
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "Buscar" }}
              onChange={(e) => this.onChange(e.target.value)}
              onKeyDown={(e) => this.onKeyDown(e)}
              value={this.state.searchText}
            />
            <Button onClick={() => this.executeSearch()}>
              <SearchIcon style={{ color: "white" }} />
            </Button>
          </div>
        </Toolbar>
        <NavBar />
      </AppBar>
    </div>
  )
  }
  
}

export default withStyles(styles)(connect(null)(withRouter(SearchAppBar)))
