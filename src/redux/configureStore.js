import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { materialReducer } from "./features/materialReducer";
import { servicesReducer } from './features/services.reducer';

export const store = createStore(
  combineReducers({
    servicesReducer,
          materialReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
