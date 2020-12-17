import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 12% auto 0 auto;
  background-color: var(--secundary);
  border-radius: 20px;
  padding: 3% 5%;
`;
export const Title = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  color: var(--fontWhite);
`;
export const Text = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: var(--fontWhite);
`;
export const Button = styled.div`
  background-color: transparent;
  border: 2px solid var(--primary);
  > a {
    text-decoration: none;
    color: var(--primary);
    font-size: 20px;
  }
  cursor: pointer;
  border-radius: 22px;
  font-family: "Be Vietnam";
  width: 150px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 15px 5px 15px;
  :hover {
    background-color: var(--primary);
    > a {
      color: var(--fontWhite) !important;
    }
    transition: all 0.2s ease-out;
  }
`;
