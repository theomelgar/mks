"use client";
import Image from "next/image";
import styled from "styled-components";
import { CartProductProps, Product } from "@/Interfaces/Produtos";
import { useDispatch } from "react-redux";
import {
  decreaseQuantityProduct,
  increaseQuantityProduct,
  removeProductFromCart,
} from "@/redux/store";

export default function Card(props: CartProductProps) {
  const dispatch = useDispatch();

  const { product } = props;
  
  const handleRemove = () => {
    dispatch(removeProductFromCart(product.id));
  };

  const Counter = () => {
    const handleIncrease = () => {
      dispatch(increaseQuantityProduct(product.id));
    };

    const handleDecrease = () => {
      dispatch(decreaseQuantityProduct(product.id));
    };

    return (
      <CounterContainer>
        <Text>Qtd:</Text>
        <Button onClick={handleDecrease}>-</Button>
        <h3>|</h3>
        <Count>{product.quantity}</Count>
        <h3>|</h3>
        <Button onClick={handleIncrease}>+</Button>
      </CounterContainer>
    );
  };

  return (
    <Container>
      <Image
        src={product.photo}
        alt={product.name}
        width={50}
        height={50}
      ></Image>
      <h1>{product.name}</h1>
      <Counter />
      <h2>R${product.price}</h2>
      <Remove onClick={handleRemove}>X</Remove>
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
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
  h1 {
    width: 113px;
    font-size: 13px;
    font-weight: 400;
    text-align: center;
  }
  h2 {
    font-size: 14px;
    font-weight: 700;
  }
  h3 {
    font-size: 15px;
    font-weight: 200;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: 0.3px solid black;
  border-color: #bfbfbf;
  position: relative;
 
`;

const Text = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  font-size: 8px;
  font-weight: 400;
  line-height: 6px;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
`;

const Count = styled.span`
  margin: 0 8px;
  font-size: 20px;
  font-weight: 500;
`;

const Remove = styled.button`
  position: absolute;
  top: 0px;
  right: -10px;
  width: 28px;
  height: 28px;
  font-size: 18px;
  font-weight: 400;
  line-height: 15px;
  border: none;
  border-radius: 50%;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;