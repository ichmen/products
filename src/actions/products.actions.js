import * as Gateway from "../gateway/gateway";
export const PRODUCTS_LOADED = "PRODUCTS/PRODUCTS_LOADED";
export const PRODUCT_DELETED = "PRODUCTS/PRODUCT_DELETED";

export function productsLoaded(products) {
  return { type: PRODUCTS_LOADED, payload: products };
}

export function deleteProduct(productId) {
  return { type: PRODUCT_DELETED, payload: productId };
}

export function addProduct(productId) {
  return { type: PRODUCT_DELETED, payload: productId };
}

export function getProducts() {
  function thunkAction(dispatch) {
    try {
      Gateway.fetchProducts().then((data) => {
        return dispatch(productsLoaded(data));
      });
    } catch (e) {
      alert("Can't fetch or bad data");
    }
  }
  return thunkAction;
}
