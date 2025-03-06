import React from "react";
import styled from "styled-components";

const Display = styled.div`
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  transition: background-color 0.3s ease-in-out;
`;

const hexToRgb = (hex) => {
  const cleanHex = hex.startsWith("#") ? hex.substring(1) : hex;
  const entireValue = parseInt(cleanHex, 16);
  const redValue = (entireValue >> 16) & 255;
  const greenValue = (entireValue >> 8) & 255;
  const blueValue = entireValue & 255;

  return `RGB: (${redValue}, ${greenValue}, ${blueValue})`;
};

const ColorDisplay = ({ color }) => {
  return (
    <Display style={{ backgroundColor: color }}>
      <p>HEX: {color}</p>
      <p>RGB: {hexToRgb(color)}</p>
    </Display>
  );
};

export default ColorDisplay;
