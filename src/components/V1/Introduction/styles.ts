import styled from "styled-components";

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
  background-color: transparent;
`;
export const Title = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 500;
  font-size: 53px;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.fontPrimary};
  @media (max-width: 768px) {
    font-size: 46px;
  }
`;
export const SubTitle = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: ${(props) => props.theme.colors.fontPrimary};
`;
export const AvatarContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8%;
`;
export const AvatarIcon = styled.img`
  width: 450px;
  height: 251px;
  @media (max-width: 768px) {
    width: 350px;
    height: 201px;
  }
  flex-shrink: 0;
`;
export const BottomImageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6%;
`;
export const BottonImage = styled.img`
  width: 650px;
  height: 265px;
  @media (max-width: 768px) {
    width: 340px;
    height: 165px;
  }
`;
