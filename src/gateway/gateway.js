import axios from "axios";
const baseURL = "https://dummyjson.com";

export async function fetchProducts() {
  const response = await axios.get(`${baseURL}/products`);
  return response.data.products;
}
