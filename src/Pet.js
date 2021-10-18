import React from "react";

const Pet = ({ name, age, size }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, age),
    React.createElement("h3", {}, size),
  ]);
};

export default Pet;
