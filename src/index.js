import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./custom-form-controls.css";
import App from "./components/App";

const DATA = [
  {
    name: "Apples",
    id: "b2c0983f-52f9-4e51-824e-e44ed5bb90e8",
    checked: false
  },
  {
    name: "Oranges",
    id: "2b1137f3-8941-40f3-801d-b20bb2b459cc",
    checked: false
  },
  {
    name: "Tangerines",
    id: "4d9605cb-b233-43e3-9be0-42fc589f5d97",
    checked: false
  }
];

ReactDOM.render(<App todos={DATA} />, document.getElementById("root"));
