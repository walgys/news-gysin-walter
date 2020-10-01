import baseReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const store = createStore(baseReducer, applyMiddleware(thunk));

export default store;
