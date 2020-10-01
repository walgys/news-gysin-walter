import React from "react";
import TopBar from "./components/TopBar";
import View from "./components/View";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@material-ui/core";
import BottomAppBar from "./components/BottomBar";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopBar />
        <Container maxWidth="xl">
          <View />
          <BottomAppBar />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
