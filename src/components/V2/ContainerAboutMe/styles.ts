import styled from "styled-components";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Github } from "@styled-icons/boxicons-logos/Github";

export const Container = styled.div`
  max-width: 1200px;
  @media (min-width: 1500px) {
    max-width: 1600px;
  }
  @media (max-width: 768px) {
    margin: 40% auto 0 auto;
  }
  min-height: 400px;
  margin: 5% auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.div`
  padding: 32px;
  max-width: 700px;
  @media (min-width: 1500px) {
    max-width: 900px;
  }
  border-radius: 16px;
  background: linear-gradient(
    101.26deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
export const Title = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #fff;
  margin-bottom: 3%;
`;
export const Text = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-family: Sora;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  > div {
    margin-top: 30px;
  }
`;
export const IconsContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 30px;
`;
export const LinkedinIcon = styled(Linkedin)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: #fff;
  fill: #fff;
  cursor: pointer;
  margin-right: 10px;
`;
export const GithubIcon = styled(Github)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: #fff;
  fill: #fff;
  cursor: pointer;
`;
export const ImageContent = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
    url("https://avatars0.githubusercontent.com/u/68209906?s=400&u=9aff0928539caef8c416bd5af1fea76714ac8fb6&v=4");
  border-radius: 8px;
  width: 400px;
  height: 360px;
  margin-left: 3%;
  background-position: center;
  background-size: auto;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageText = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
export const TitleImage = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.7);
`;
export const SubTitleImage = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.5);
`;
