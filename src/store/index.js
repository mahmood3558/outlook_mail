import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { getUser, getUserImg, getMailFolders } from "../actions/user";
import { redusers } from "../reducers";

///to publish delete ",window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
export const Store = createStore(
  redusers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//Initalize
// Store.dispatch(getUser());
// Store.dispatch(getUserImg());
// Store.dispatch(getMailFolders());
