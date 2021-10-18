import React from "react";
import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {
        className: "name",
      },
      "Adopt me!"
    ),
    React.createElement(Pet, { name: "BROM", age: 13, size: "XL" }),
    React.createElement(Pet, { name: "Tom", age: 24, size: "S" }),
    React.createElement(Pet, { name: "Susan", age: 53, size: "L" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
