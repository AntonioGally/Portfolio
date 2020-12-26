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
          </Carousel>
        </CellPhoneVersion>
      </ProjectContent>
    </Container>
  );
};

export default Projects;
