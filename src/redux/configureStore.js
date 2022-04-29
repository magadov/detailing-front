import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import application from "./features/application";
import { materialReducer } from "./features/materialReducer";
import { servicesReducer } from './features/services.reducer';
import { clientsReducer } from './features/clients.reducer';
import { carsReducer } from './features/cars.reducer';

export const store = createStore(
  combineReducers({
    application,
    materialReducer,
    servicesReducer,
    clientsReducer,
    carsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
