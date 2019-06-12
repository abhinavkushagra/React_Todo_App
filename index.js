import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./src/reducers/index";
import App from "./src/components/App";

const store = createStore(todoApp); //passing reducers

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
); //passing store as props
