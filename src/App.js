import ReactDOM from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Brian" age="13" size="XL" />
      <Pet name="Tom" age="57" size="L" />
      <Pet name="Sam" age="21" size="S" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
