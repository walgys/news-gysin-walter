import React from "react";
import Menu from "../Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default function SwipeableTemporaryDrawer(props) {
  const { modal, toggleDrawer, value, handleModalChange } = props;

  return (
    <div>
      <SwipeableDrawer
        open={modal}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Menu
          value={value}
          handleChange={handleModalChange}
          toggleDrawer={toggleDrawer}
        />
      </SwipeableDrawer>
    </div>
  );
}
