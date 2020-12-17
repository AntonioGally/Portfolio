import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const TextContent = styled.div`
  margin-top: 3.5%;
  @media (max-width:768px) {
    margin-top: 10%;
  }
`;
export const Title = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: var(--fontWhite);
  margin-bottom: 2%;
  @media (max-width: 768px) {
    margin-bottom: 6%;
    font-size: 25px;
  }
`;
export const Text = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 19px;
  }
  margin: 0 auto;
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  color: var(--fontWhite);
`;
