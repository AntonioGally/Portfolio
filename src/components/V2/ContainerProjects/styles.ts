import styled from "styled-components";
import { CommentAdd } from "@styled-icons/boxicons-solid/CommentAdd";

export const PlusIcon = styled(CommentAdd)`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
  color: white;
  fill: white;
  margin-left: 20px;
`;

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
export const ProjectContent = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    margin-top: 15%;
  }
  margin-top: 5%;
  width: 100%;
`;
export const DesktopVersion = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
  @media (min-width: 1101px) {
    display: unset;
  }
`;
export const CellPhoneVersion = styled.div`
  @media (max-width: 1100px) {
    display: unset;
  }
  @media (min-width: 1101px) {
    display: none;
  }
`;
export const Card = styled.div`
  background: linear-gradient(
    101.26deg,
    rgba(255, 255, 255, 0.01) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  @media (max-width: 768px) {
    background: linear-gradient(
      101.26deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    max-width: 700px;
    margin: auto;
  }
  padding: 30px;
  border-radius: 16px;
`;
export const TitleCard = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  color: var(--fontPrimary);
`;
export const Text = styled.div`
  margin-top: 3%;
  font-family: "Sora";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 10%;
  }
  color: rgba(255, 255, 255, 0.75);
  > div {
    margin-top: 30px;
  }
  > div > a {
    text-decoration: none;
    background: linear-gradient(94.15deg, #e01f1f 0%, #1b1bec 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
`;
export const MyGridContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  cursor: grab;
`;
export const CardContent = styled.div`
  width: 520px;
  @media (max-width: 500px) {
    width: 320px;
  }
`;

export const TitleModal = styled.div``;
export const TextModal = styled.div``;
