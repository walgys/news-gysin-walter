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
    <BrowserRouter>
    <Provider store={store}>
      
        <TopBar />
        <Container maxWidth="xl">
          <View />
          <BottomAppBar />
        </Container>
      
    </Provider>
    </BrowserRouter>
  );
};

export default App;
