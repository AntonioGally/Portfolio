import React from "react";
import Grid from "@material-ui/core/Grid";
import { Carousel } from "react-bootstrap";
import {
  Container,
  Title,
  ProjectContent,
  DesktopVersion,
  CellPhoneVersion,
  Card,
  TitleCard,
  Text,
} from "./styles";

const Projects: React.FC = () => {
  return (
    <Container>
      <Title>Principais Projetos</Title>
      <ProjectContent>
        <DesktopVersion>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card>
                <TitleCard>Quem Vai</TitleCard>
                <Text>
                  O ”Quem Vai” é uma aplicação web voltada a fomentar o lazer
                  principalmente para os mais jovens.
                  <div>
                    Dentro do projeto, fui responsável por trabalhar junto com
                    uma equipe e desenvolver o Front-end da aplicação em React.
                  </div>
                </Text>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <TitleCard>Clone Whatsapp</TitleCard>
                <Text>
                  O clone do sistema de WhatsApp está sendo feito em React com
                  Typescript e de backend está sendo utilizado o FireBase.
                  <div>
                    Estou realizando esse projeto para aplicar responsividade ao
                    WhatsApp Web,cadastrar usuários e realizar um chat de
                    conversa em tempo real.
                  </div>
                </Text>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <TitleCard>Esse Site</TitleCard>
                <Text>
                  Esse site, com intuito de divulgar meu trabalho e me expressar
                  como dev.
                  <div>
                    Ele foi feito em React com auxílio do Material UI para grid
                    e Bootstrap para componentes.
                  </div>
                  <div>
                    A UI do site foi feita pelo meu amigo Pedro Emerenciano,
                    vale conferir{" "}
                    <a
                      href="https://www.linkedin.com/in/pedro-emerenciano/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      seu trabalho.
                    </a>
                  </div>
                </Text>
              </Card>
            </Grid>
          </Grid>
        </DesktopVersion>
        <CellPhoneVersion>
          <Carousel controls={false}>
            <Carousel.Item>
              <Card>
                <TitleCard>Quem Vai</TitleCard>
                <Text>
                  O ”Quem Vai” é uma aplicação web voltada a fomentar o lazer
                  principalmente para os mais jovens.
                  <div>
                    Dentro do projeto, fui responsável por trabalhar junto com
                    uma equipe e desenvolver o Front-end da aplicação em React.
                  </div>
                </Text>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <TitleCard>Clone Whatsapp</TitleCard>
                <Text>
                  O clone do sistema de WhatsApp está sendo feito em React com
                  Typescript e de backend está sendo utilizado o FireBase.
                  <div>
                    Estou realizando esse projeto para aplicar responsividade ao
                    WhatsApp Web,cadastrar usuários e realizar um chat de
                    conversa em tempo real.
                  </div>
                </Text>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <TitleCard>Esse Site</TitleCard>
                <Text>
                  Esse site, com intuito de divulgar meu trabalho e me expressar
                  como dev.
                  <div>
                    Ele foi feito em React com auxílio do Material UI para grid
                    e Bootstrap para componentes.
                  </div>
                  <div>
                    A UI do site foi feita pelo meu amigo Pedro Emerenciano,
                    vale conferir{" "}
                    <a
                      href="https://www.linkedin.com/in/pedro-emerenciano/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      seu trabalho.
                    </a>
                  </div>
                </Text>
              </Card>
            </Carousel.Item>
          </Carousel>
        </CellPhoneVersion>
      </ProjectContent>
    </Container>
  );
};

export default Projects;
