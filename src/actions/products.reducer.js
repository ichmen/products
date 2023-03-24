// import { createReducer } from "@reduxjs/toolkit";

import { PRODUCTS_LOADED, PRODUCT_DELETED } from "./products.actions";

const initialState = [];

// export function productsReducer(state, action) {}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      console.log(state);
      return { ...state, products: action.payload };

    case PRODUCT_DELETED:
      return { ...state, products: action.payload };

    default:
      return state;
  }
}

// export const productsReducer = createReducer(initialState, (builder) => {
//   console.log(builder);
//   builder
//     .addCase(PRODUCTS_LOADED, (state, action) => {
//       state.products = action.payload;
//     })
//     .addCase(PRODUCT_DELETED, (state, action) => {})
//     .addDefaultCase((state, action) => state);
// });
