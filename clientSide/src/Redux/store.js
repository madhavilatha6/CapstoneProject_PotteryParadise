// import thunk from "redux-thunk";

// import ProductReducer from "./ProductReducer/reducer";

// import {creatStore , applyMiddle ,combineAllreducers , compose} from "redux";

// const rootReducer = combineAllreducers({product : ProductReducer});

// const composeEnhance = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_  || compose;

// export const storing = creatStore(

//     rootReducer,
//     composeEnhance(applyMiddle(thunk))
// );

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
