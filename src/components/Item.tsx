"use client";
import { Product } from "@/Interfaces/Produtos";
import Image from "next/image";
import styled from "styled-components";

export default function Item({
  name,
  photo,
  price,
  description,
  brand,
}: Product) {
  return (
    <Container>
      <Image src={photo} alt={name} width={124} height={124} />
      <Titulo>
        <h1>{name}</h1>
        <p>R${price}</p>
      </Titulo>
      <h2>{description}</h2>
      <Comprar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        COMPRAR
      </Comprar>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  width: 217.56px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 2px 8px 0px #00000022;

  border-radius: 10px;
  position: relative;
  h2 {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2c2c2c;
  }
  img {
    width: 120px;
  }
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  gap: 15px;
  h1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    padding: 5px;
    color: #ffffff;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #373737;
  }
`;

const Comprar = styled.button`
  width: 100%;
  height: 31.91px;
  position: absolute;
  bottom: -10px;
  left: 0;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  gap: 10px;
  box-shadow: 0px 2px 8px 0px #00000022;

  svg {
    width: 20px;
  }
`;
