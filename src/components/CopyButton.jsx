import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background: #202124;
  color: #ffffee;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background: #00ddaa;
  }
`;

const CopyButton = ({ text }) => {
  const copyColor = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button onClick={copyColor}> Copiar para area de transferencia</Button>
  );
};

export default CopyButton;
