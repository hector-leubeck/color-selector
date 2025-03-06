import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100px;
  height: 50px;
  border: none;
  cursor: pointer;
  background: none;
`;

const ColorSelector = ({ setColor }) => {
  return <Input type="color" onChange={(e) => setColor(e.target.value)} />;
};

export default ColorSelector;
