import axios from "axios";
const baseURL = "https://dummyjson.com";

export async function fetchProducts() {
  const response = await axios.get(`${baseURL}/products`);
  console.log(response.data.products);
  // response.json();
  return response.data.products;
}
