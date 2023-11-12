'use client'
import styled from "styled-components";
import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  photo: string;
  price: number;
  description: string;
  brand: string;
}

export default function Vitrine() {
  const [produtos, setProdutos] = useState<Product[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC");
      setProdutos(response.data.products);
      return console.log(response.data.products);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {produtos && produtos.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin: 200px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3em;
  justify-content: space-around;
  align-items: center;
  width: 70%;
`;
