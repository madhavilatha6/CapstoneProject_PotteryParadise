import thunk from "redux-thunk";
import ProductReducer from "./ProductReducer/reducer";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";

// console.log( "data", ProductReducer)
const rootReducer = combineReducers({ product: ProductReducer });

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhance(applyMiddleware(thunk))
);
