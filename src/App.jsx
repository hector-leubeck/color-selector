import React, { useState } from "react";
import styled from "styled-components";
import ColorDisplay from "./components/ColorDisplay";
import ColorSelector from "./components/ColorSelector";
import Container from "./components/Container";
import CopyButton from "./components/CopyButton";

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

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 99vw;
  background-color: #121212;
  margin: 0;
  padding: 0;
`;

function App() {
  const [color, setColor] = useState("ff0000");

  return (
    <AppWrapper>
      <Container>
        <ColorSelector setColor={setColor} />
        <ColorDisplay color={color} />
        <CopyButton text={color} />
      </Container>
    </AppWrapper>
  );
}

export default App;
