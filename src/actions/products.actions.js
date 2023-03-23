export const PRODUCTS_LOADED = "PRODUCTS/PRODUCTS_LOADED";

export function productsLoaded(products) {
  return { type: PRODUCTS_LOADED, payload: products };
}
