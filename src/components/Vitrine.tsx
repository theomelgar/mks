"use client";
import styled from "styled-components";
import Item from "./Item";
import { Product } from "@/Interfaces/Produtos";

export default function Vitrine({ produtos, setIsOpenCart }: any) {
  
  return (
    <Container>
      {produtos &&
        produtos.map((item: Product) => (
          <Item key={item.id} products={item} setOpen={setIsOpenCart} />
        ))}
    </Container>
  );
}
const Container = styled.div`
  margin: 200px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;
