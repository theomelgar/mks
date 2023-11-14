import styled from "styled-components";

export default function Footer() {
  return <Container>MKS sistemas © Todos os direitos reservados</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
  width: 100%;
  height: 34px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
`;
