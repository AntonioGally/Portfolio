import styled, { css } from "styled-components";
export const Container = styled.div`
  margin: -5% auto 0 auto;
  max-width: 1200px;
  padding: 50px 5% 50px 5%;
  border-radius: 20px;
  border: 0.1px solid #000000;
  background-color: var(--background);
`;

export const DesktopVersion = styled.div`
  display: unset;
  @media (max-width: 980px) {
    display: none;
  }
`;
export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Header = styled.div`
  width: 100%;
`;
var iconStyle = css`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;
export const IconContainer = styled.img`
  ${iconStyle}
`;
export const TextContent = styled.div`
  font-family: "Be Vietnam";
  color: var(--fontBlack);
`;
export const TitleHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
`;
export const TextHeader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  margin: 4% auto 0 auto;
  max-width: 55%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const Middle = styled.div`
  margin-top: 12%;
  width: 100%;
`;
export const TitleMiddle = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: var(--primary);
`;
export const TextMiddle = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: var(--fontBlack);
  margin-top: 2%;
`;
export const End = styled.div`
  margin-top: 12%;
  width: 100%;
`;
export const TitleEnd = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 1%;
`;
export const TextEnd = styled.div`
  margin-top: 1%;
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: var(--fontBlack);
`;
export const CellPhoneVersion = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: unset;
  }
`;
