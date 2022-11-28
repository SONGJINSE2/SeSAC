import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PracticeDefault from "./Practice1";

const store = createStore(reducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PracticeDefault />
  </Provider>
);

function reducer(state, action) {
  if (action.type === "DEPOSIT") {
    return { cash: state.cash + +action.a };
  }

  if (action.type === "WITHDRAW") {
    return { cash: state.cash - +action.b };
  }
  return { cash: 0 };
}
