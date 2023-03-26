export const VISIBILITY_CHANGED = "NEW_PRODUCT/VISIBILITY_CHANGED";

export function setNewProductVisibility(isVisible) {
  return { type: VISIBILITY_CHANGED, payload: isVisible };
}
