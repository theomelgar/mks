'use client'
import styled from "styled-components";
import Cart from "./Cart";

export default function Header({ setOpenCart, isOpenCart }: { setOpenCart: (value: boolean) => void; isOpenCart: boolean }) {
  return (
    <Container>
      <Titulo>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </Titulo>
      <Cart setOpenCart={setOpenCart} isOpenCart={isOpenCart}></Cart>
    </Container>
  );
}

const Container = styled.div`
  background: #0f52ba;
  color: #ffffff;
  position: fixed;
  z-index: 1;
  padding: 0 40px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 101px;
`;
const Titulo = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 0px;
  }
`;
