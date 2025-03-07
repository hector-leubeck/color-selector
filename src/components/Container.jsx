import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#333"};
  box-sizing: border-box
  padding: 10px 60px;
  margin: 0 0.5vw;
  border-radius: 10px;
  width: 99vw;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

export default Container;
