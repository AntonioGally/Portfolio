import styled from "styled-components";

export const MyRow = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  cursor: pointer;
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
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 15px 5px 15px;
  :hover {
    background-color: var(--primary);
    color: var(--fontWhite);
    transition: all 0.2s ease-out;
  }
`;
