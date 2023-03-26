export const SEARCH_STRING_CHANGED = "SEARCH/SEARCH_STRING_CHANGED";

export function searchStringChange(text) {
  console.log(text);
  return { type: SEARCH_STRING_CHANGED, payload: text };
}
