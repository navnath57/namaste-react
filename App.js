import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parentDiv" },
  React.createElement("div", { id: "childDiv" }, [
    React.createElement("h1", { id: "heading" }, "I'm the h1 tag!"),
    React.createElement("h2", { id: "heading2" }, "I'm the h1 tag!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
