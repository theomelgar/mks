import styled from "styled-components";
import Item from "./Item";

export default function Vitrine() {
  return (
    <Container>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </Container>
  );
}

const Container = styled.div`
  margin: 200px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
  gap: 2em;
`;
