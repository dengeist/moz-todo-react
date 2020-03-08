import React from "react";
import ReactDOM from "react-dom";
import { LiveAnnouncer } from "react-aria-live";

import "./index.css";
import "./custom-checkboxes.css";

import App from "./components/App";

const TODOS = [
  {
    name: "Apples"
  },
  {
    name: "Oranges"
  },
  {
    name: "Tangerines"
  }
];

ReactDOM.render(
  <LiveAnnouncer>
    <App />
  </LiveAnnouncer>,
  document.getElementById("root")
);
