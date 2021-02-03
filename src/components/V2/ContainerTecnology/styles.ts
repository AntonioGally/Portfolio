import styled, { css } from "styled-components";

import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { LogoJavascript } from "@styled-icons/ionicons-solid/LogoJavascript";
import { LogoReact } from "@styled-icons/ionicons-solid/LogoReact";

export const Container = styled.div`
  max-width: 1300px;

  @media (max-width: 768px) {
    margin: 35% auto 0 auto;
  }
  margin: 10% auto 0 auto;
`;
export const Title = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  color: var(--fontPrimary);
  ::before {
    content: "";
    width: 100px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: -13px;
    left: calc(50% - 50px);
  }
`;
export const TecnologyContent = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    margin-top: 15%;
  }
  margin-top: 5%;
  width: 100%;
`;
export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
var stylesIcon = css`
  height: 130px;
  width: 130px;
  color: #fff;
  fill: #fff;
  flex-shrink: 0;
  cursor: pointer;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 38px;
    width: 38px;
  }
`;
export const TsIcon = styled(Typescript)`
  ${stylesIcon}
`;
export const JsIcon = styled(LogoJavascript)`
  ${stylesIcon}
`;
export const ReactIcon = styled(LogoReact)`
  ${stylesIcon}
`;
export const SubTitle = styled.div`
  margin-top: 30px;
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  @media (max-width: 768px) {
    margin-top: 15px;
    font-size: 14px;
  }
  color: var(--fontPrimary);
`;
