import React, { useState } from "react";
import styled from "styled-components";
import ColorDisplay from "./components/ColorDisplay";
import ColorSelector from "./components/ColorSelector";
import Container from "./components/Container";

const MainButton = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #2980b9;
  }
`;

function App() {
  const [color, setColor] = useState("ff0000");

  return (
    <Container>
      <ColorSeclector setColor={setColor} />
      <ColorDisplay color={color} />
    </Container>
  );
}

export default App;
