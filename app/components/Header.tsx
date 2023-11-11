import styled from "styled-components";
import Carrinho from "./Carrinho";

export default function Header() {
  return (
    <Container>
      <Titulo>
        <h1>MKS</h1>
        <h2>Sistemas</h2>
      </Titulo>
      <Carrinho></Carrinho>
    </Container>
  );
}

const Container = styled.div`
  background: #0f52ba;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap:50%;
  width: 100vw;
  height: 101px;
`;
const Titulo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
