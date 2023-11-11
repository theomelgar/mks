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
