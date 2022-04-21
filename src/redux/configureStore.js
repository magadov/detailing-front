import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { materialReducer } from "./features/materialReducer";

export const store = createStore(
  combineReducers({
      materialReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
