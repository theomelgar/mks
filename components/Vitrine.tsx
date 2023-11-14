"use client";
import styled from "styled-components";
import Item from "./Item";

import { useState } from "react";

export default function Vitrine({ produtos, setIsOpenCart }: any) {
  const uniqueBrands = new Set();

  produtos.forEach((item: any) => {
    uniqueBrands.add(item.brand);
  });

  const uniqueBrandsArray = Array.from(uniqueBrands);

  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <>
      <CategoryBarWrapper>
        <label htmlFor="brandFilter">Pesquise por marcas:</label>
        <CategorySelect
          id="brandFilter"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">Todas as marcas</option>
          {uniqueBrandsArray.map((brand: any) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </CategorySelect>
      </CategoryBarWrapper>
      <Container>
        {produtos
          .filter((item: any) => !selectedBrand || item.brand === selectedBrand)
          .map((item: any) => (
            <Item key={item.id} products={item} setOpen={setIsOpenCart} />
          ))}
      </Container>
    </>
  );
}
const Container = styled.div`
  margin: 0px auto 100px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
  justify-content: space-around;
  align-items: center;
  width: 60%;
`;

const CategoryBarWrapper = styled.div`
  margin: 150px auto 50px auto;
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 1em;
`;

const CategorySelect = styled.select`  
  text-align: center;
  width: 200px;
  height: 100%;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight:500;
  background-color: #f2f2f2;
`;
