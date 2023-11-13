"use client";
import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { ProductCart } from "@/Interfaces/Produtos";
import { removeAllProductsFromCart } from "@/redux/store";

export default function Cart({
  setOpenCart,
  isOpenCart,
}: {
  setOpenCart: (value: boolean) => void;
  isOpenCart: boolean;
}) {
  const toggleSideWindow = () => {
    setOpenCart(!isOpenCart);
  };

  const dispatch = useDispatch();

  const handleBuy = () => {
    dispatch(removeAllProductsFromCart(products));
    setOpenCart(false)
    return alert("Sua compra foi efetuada com sucesso!");
  };

  const { products } = useSelector((state: any) => state.cart);

  const quantity = useSelector((cartReducer: any) => cartReducer.cart.products);

  const productsCount = quantity.reduce(
    (acc: number, curr: any) => acc + parseInt(curr.quantity),
    0
  );

  const total = products.reduce(
    (acc: number, prod: ProductCart) =>
      acc + parseInt(prod.price) * prod.quantity,
    0
  );
  const buy = quantity.reduce(
    (acc: number, curr: any) => acc + parseInt(curr.quantity),
    0
  );
  return (
    <>
      <Container onClick={toggleSideWindow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>

        <p>{productsCount}</p>
      </Container>
      {isOpenCart && (
        <SideWindow>
          <Top>
            <h1>Carrinho de compras</h1>{" "}
            <Close onClick={toggleSideWindow}>X</Close>
          </Top>
          <Box>
            {products.length > 0 ? (
              products.map((item: ProductCart) => (
                <Card key={item.id} product={item} state={products} />
              ))
            ) : (
              <Zero>Seu carrinho ainda está vazio</Zero>
            )}
          </Box>
          <Total>
            <h1>Total:</h1>
            <h1>R${total}</h1>
          </Total>
          <Buy onClick={handleBuy}>Finalizar Compra</Buy>
        </SideWindow>
      )}
    </>
  );
}

const Container = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 80px;
  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
  svg {
    width: 20px;
  }
`;

const SideWindow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 486px;
  max-width: 100vw;
  height: 100vh;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px #00000021;
  z-index: 1;
`;

const Close = styled.button`
  position: absolute;
  top: 50px;
  right: 30px;
  width: 38px;
  height: 38px;
  font-size: 28px;
  font-weight: 400;
  line-height: 15px;
  border: none;
  border-radius: 50%;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 56px;
  margin: 40px;
  h1 {
    font-size: 27px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(95px, 1fr));
  gap: 40px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  height: 500px;
  padding: 10px;
  @media (max-width: 768px) {
    grid-template-rows: 1fr;
    height: 350px;
  }
`;

const Zero = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 100px;
  left: 0;
  h1 {
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
  }
`;
const Buy = styled.button`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 97px;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  color: #ffffff;
  border: none;
  background: #000000;
`;
