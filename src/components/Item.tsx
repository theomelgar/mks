import Image from "next/image";
import styled from "styled-components";
import Product from "../../public/apple-watch.png";

export default function Item() {
  return (
    <Container>
      <Image src={Product} alt="Apple Watch"></Image>
      <Titulo>
        <h1>Apple Watch Series 4 GPS</h1>
        <button>R$399</button>
      </Titulo>
      <h2>Redesigned from scratch and completely revised.</h2>
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
  width: 217.56px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 8px 0px #00000022;

  padding: 10px;
  border-radius: 10px;
  h2 {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    color: #2c2c2c;
  }
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  button {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;

    color: #ffffff;
    height: 100%;

    border-radius: 5px;
    background-color: #373737;
  }
`;

const Comprar = styled.button`
  width: 218px;
  height: 31.91px;
  border-radius: 0px, 0px, 8px, 8px;
  background-color: #0f52ba;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  gap: 10px;
  svg {
    width: 20px;
  }
`;
