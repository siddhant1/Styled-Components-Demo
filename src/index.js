import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { injectGlobal } from "styled-components";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
injectGlobal`
  body {
    background-color: ghostwhite;
    padding: 0;
    margin: 0;
    font-family: cursive;
  }
`;
serviceWorker.unregister();
