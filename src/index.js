import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./components/App";

const DATA = [
  { name: "Eat", completed: true },
  { name: "Sleep", completed: false },
  { name: "Repeat", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
