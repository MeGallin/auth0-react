import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Auth from "./Auth";

const auth = new Auth();

let state = {};
window.setSate = changes => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state} />, document.getElementById("root"));
};

/* eslint no-restricted-globals: 0 */
let tokenExpire = auth.getProfile().exp;
let initialState = {
  name: "Gary",
  tokenExpire: tokenExpire,
  location: location.pathname.replace(/^\/?|\$/g, ""),
  auth
};
window.setSate(initialState);
serviceWorker.unregister();
