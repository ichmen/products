import { SEARCH_STRING_CHANGED } from "./search.actions";

const initialState = { search: "" };

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_STRING_CHANGED:
      return { ...state, search: action.payload };

    default:
      return state;
  }
}
