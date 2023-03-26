import { VISIBILITY_CHANGED } from "./newProduct.action";
const initialState = { isVisible: false };

export function newProductReducer(state = initialState, action) {
  switch (action.type) {
    case VISIBILITY_CHANGED:
      return { ...state, isVisible: action.payload };

    default:
      return state;
  }
}
