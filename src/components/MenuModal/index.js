import React from "react"
import Menu from "../Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import * as actions from "../../actions"
import { connect } from "react-redux"

const SwipeableTemporaryDrawer = (props) => {
  const { dispatch } = props
  const { modal } = props.navigation

  return (
    <div>
      <SwipeableDrawer
        style={{ marginTop: "40px" }}
        open={modal}
        onClose={() => dispatch(actions.closeModal())}
        onOpen={() => dispatch(actions.openModal())}
      >
        <Menu />
      </SwipeableDrawer>
    </div>
  )
}

const mapStateToProps = (state) => ({ navigation: state.navigation})

export default connect(mapStateToProps)(SwipeableTemporaryDrawer)