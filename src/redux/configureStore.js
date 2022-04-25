import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import application from "./features/application";
import { materialReducer } from "./features/materialReducer";
import { servicesReducer } from './features/services.reducer';

export const store = createStore(
  combineReducers({
    application,
    materialReducer,
    servicesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
