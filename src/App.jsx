import React from "react";
import styled from "styled-components";

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
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Color Selector</h1>
      <MainButton>Pick a Color</MainButton>
    </div>
  );
}

export default App;
