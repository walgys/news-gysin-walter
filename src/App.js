import React from "react";
import TopBar from "./components/TopBar";
import View from "./components/View";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import BottomAppBar from "./components/BottomBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Container maxWidth="xl">
        <View />
        <BottomAppBar />
      </Container>
    </BrowserRouter>
  );
}

export default App;
