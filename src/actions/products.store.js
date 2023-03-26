import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { productsReducer } from "./products.reducer";
import { searchReducer } from "./search.reducer";

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  {
    // productsReducer,
    reducer: {
      products: productsReducer,
      search: searchReducer,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
