import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import application from "./features/application";

export const store = createStore(
  combineReducers({
    application,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
