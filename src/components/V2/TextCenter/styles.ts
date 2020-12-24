import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 40%;
  }
  > div > span {
    font-family: "Sora";
    font-style: normal;
    font-weight: 600;
    font-size: 136px;
    @media (max-width: 1200px) {
      font-size: 100px;
    }
    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 60px;
    }
    line-height: 171px;
    color: var(--fontPrimary);
    &.MyName {
      background: linear-gradient(94.15deg, #e01f1f 0%, #1b1bec 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7%;
  @media (max-width: 768px) {
    margin-top: 30%;
  }
`;
