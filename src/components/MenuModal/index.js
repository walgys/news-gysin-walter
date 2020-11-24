import React from "react"
import Menu from "../Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import * as actions from "../../actions"
import { useSelector, useDispatch } from "react-redux"

export default function SwipeableTemporaryDrawer() {
  const { modal } = useSelector((state) => state.navigation)
  const dispatch = useDispatch()

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
