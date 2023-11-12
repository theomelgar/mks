import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const getProdutos = async () => {
  try {
    const response = await axios.get(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );
    return  response.data.products;
  } catch (error) {
    return { error };
  }
}

const AddCart = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getProdutos(),
  })
}

export { AddCart, getProdutos}