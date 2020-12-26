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
            Meu nome é Antônio Gally, sou iniciante na área, mas ambicioso.
            Realizei vários projetos em vários idiomas, um dos quais foi projeto
            de conclusão de curso, meu curso técnico.
            <div>
              Trabalho diariamente com aplicativos WEB e também estou fazendo a
              transição para o Mobile.
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
