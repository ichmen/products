import axios from "axios";
const baseURL = "https://dummyjson.com";

export async function fetchProducts() {
  const response = await axios.get(`${baseURL}/products`);
  return response.data.products;
}

export function deleteProduct(id) {
  // axios.delete(`${baseURL}/${id}`).then((response) => console.log(response));
}
