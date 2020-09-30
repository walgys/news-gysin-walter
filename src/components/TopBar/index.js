import SearchAppBar from "../SearchAppBar";

import React, { useState, useEffect } from "react";

import MenuModal from "../MenuModal";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar";

const TopBar = () => {
  const [modal, setModal] = React.useState(false);

  const location = useLocation();

  const [value, setValue] = useState(location.pathname);

  const handleModalChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const toggleDrawer = (open) => (event) => {
    setModal(open);
  };

  return (
    <>
      <SearchAppBar toggleDrawer={toggleDrawer} />
      <NavBar />
      <MenuModal
        value={value}
        handleModalChange={handleModalChange}
        modal={modal}
        setModal={setModal}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

export default TopBar;
