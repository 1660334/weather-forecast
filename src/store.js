// src/store.js
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./containers/Weather/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
