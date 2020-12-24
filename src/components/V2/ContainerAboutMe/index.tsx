import React from "react";

import {
  Container,
  TextContent,
  Title,
  Text,
  IconsContent,
  LinkedinIcon,
  GithubIcon,
  ImageContent,
  ImageText,
  TitleImage,
  SubTitleImage,
} from "./styles";

const ContainerAboutMe: React.FC = () => {
  return (
    <Container>
      <TextContent>
        <div>
          <Title>Sobre mim</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin ligula mauris, ac iaculis tortor sodales sit amet.
            Mauris pellentesque neque eget leo pharetra euismod.
            <div>
              Curabitur id nulla sem. Cras fermentum tempus purus, ac sodales
              neque posuere id.
            </div>
          </Text>
          <IconsContent>
            <a
              href="https://www.linkedin.com/in/antônio-gally-089bab180/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/AntonioGally"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </IconsContent>
        </div>
      </TextContent>
      <ImageContent>
        <ImageText>
          <TitleImage>Antônio Gally</TitleImage>
          <SubTitleImage>Desenvolvedor Front-end</SubTitleImage>
        </ImageText>
      </ImageContent>
    </Container>
  );
};

export default ContainerAboutMe;
