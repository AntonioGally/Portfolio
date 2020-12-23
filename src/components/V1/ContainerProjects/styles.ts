import styled from "styled-components";

export const Container = styled.div``;

export const TextContent = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Title = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: ${(props) => props.theme.colors.fontPrimary};
  margin-bottom: 2%;
`;
export const SubTitle = styled.div`
  font-family: "Be Vietnam";
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: ${(props) => props.theme.colors.fontPrimary};
  > span > a {
    color: ${(props) => props.theme.colors.fontSecundary};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const ProjectsContent = styled.div`
  margin-top: 7%;
  padding: 0 5%;
`;
export const ImageProject = styled.img`
  width: 382px;
  height: 255px;
  border-radius: 20px;
  flex-shrink: 0;
  cursor: pointer;
`;
