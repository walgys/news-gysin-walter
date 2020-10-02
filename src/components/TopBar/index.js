import SearchAppBar from "../SearchAppBar";
import React from "react";
import MenuModal from "../MenuModal";
import NavBar from "../NavBar";

const TopBar = () => {
  return (
    <>
      <SearchAppBar />
      <NavBar />
      <MenuModal />
    </>
  );
};

export default TopBar;
