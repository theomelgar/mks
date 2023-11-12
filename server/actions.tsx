"use server";

import axios from "axios";

export async function getProdutos() {
  try {
    const data = await axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    return { data };
  } catch (error) {
    return { error };
  }
}
