import React from "react";
import styled from "styled-components";

const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ColorWheel = styled.input`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: none;
  padding: 0;

  &::-webkit-color-swatch {
    border-radius: 50%;
    border: 1px solid #fff;
    box-shadow: inset 2px 2px 2px 2px #e0e2e4;
  }

  &::-moz-color-swatch {
    border-radius: 50%;
    border: 1px solid #fff;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const ColorSelector = ({ setColor }) => {
  return (
    <PickerContainer>
      <ColorWheel type="color" onChange={(e) => setColor(e.target.value)} />
    </PickerContainer>
  );
};

export default ColorSelector;
