import Image from "next/image";
import styled from "styled-components";
import Product from "../../public/apple-watch.png";
import { useState } from "react";

export default function Cartao() {
  
  const Contador = () => {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
      setCount(count + 1);
    };

    const handleDecrease = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };

    return (
      <ContadorContainer>
        <Button onClick={handleDecrease}>-</Button>
        <Count>{count}</Count>
        <Button onClick={handleIncrease}>+</Button>
      </ContadorContainer>
    );
  };
  return (
    <Container>
      <Image src={Product} alt="Apple Watch" width={50}></Image>
      <h1>Apple Watch Series 4 GPS</h1>
      <Contador />
      <h2>R$399</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 379px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 2px 8px 0px #00000022;
  background: #ffffff;
  color: #2c2c2c;
  padding: 10px;
  border-radius: 10px;
  h1 {
    width: 113px;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const ContadorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: #0f52ba;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
`;

const Count = styled.span`
  margin: 0 8px;
  font-size: 20px;
  font-weight: 500;
`;
