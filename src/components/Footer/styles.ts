import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1000px) {
    margin-top: 40%;
    padding-top: 10%;
  }
  margin-top: 15%;
  width: 100%;
  height: 400px;
  padding-top: 5%;
  background-color: var(--primary);
  position: relative;
`;
export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
`;
export const Logo = styled.img`
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  cursor: pointer;
  margin-bottom: 2%;
  margin: 0 auto;
`;
export const Text = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: var(--fontWhite);
  max-width: 70%;
  margin: 0 auto;
`;
export const IconsContent = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.img`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  cursor: pointer;
`;
