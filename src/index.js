import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { rootReducer } from "./store";
import { createStore } from "redux";

import App from "./App";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
