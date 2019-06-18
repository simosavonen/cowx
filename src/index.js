import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";

import { cowsStore } from "./stores/CowsStore";

const stores = {
  cowsStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
