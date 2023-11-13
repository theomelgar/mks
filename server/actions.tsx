import { Product } from "@/Interfaces/Produtos";
import axios from "axios";

export async function getProdutos() {
  try {
    const response = await axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    return  response.data.products as Product[];
  } catch (error) {
    return { error };
  }
}
