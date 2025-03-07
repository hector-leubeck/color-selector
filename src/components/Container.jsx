import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor || "#333"}; /* Cor do fundo baseada na prop */
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-height: 100vh; /* Garantir que ocupe toda a altura da tela */

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

export default Container;
