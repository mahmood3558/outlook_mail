import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./containers/App";
import GlobalState from "./containers/GlobalState";
import { Store } from "./store/index";

// add provides r React.StrictMode

ReactDOM.render(
  <React.StrictMode>
    <GlobalState>
      <Provider store={Store}>
        <App />
      </Provider>
    </GlobalState>
  </React.StrictMode>,
  document.getElementById("root")
);
