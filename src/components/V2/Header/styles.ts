import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 5.5% 20px;
  }
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
  align-items: center;
  padding: 1.5% 20px;
  z-index: 10;
  > span {
    cursor: pointer;
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    color: var(--fontPrimary);
    margin-left: 13%;
    @media (max-width: 768px) {
      font-size: 24px;
      margin-left: 0;
    }
  }
  > div {
    color: var(--fontPrimary);
    padding: 16px 54px;
    background: linear-gradient(94.15deg, #e01f1f 0%, #1b1bec 100%);
    box-shadow: 0px 0px 32px rgba(122, 122, 122, 0.1);
    border-radius: 8px;

    margin-right: 13%;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }

    > a {
      text-decoration: none;
      font-family: "Sora";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }
  }
`;
