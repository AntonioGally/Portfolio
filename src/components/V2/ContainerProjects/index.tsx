import React from "react";
import Grid from "@material-ui/core/Grid";
import ModalInformation from "./ModalInformation";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Container,
  Title,
  ProjectContent,
  MyGridContent,
  CardContent,
  CellPhoneVersion,
  DesktopVersion,
  Card,
  TitleCard,
  Text,
  PlusIcon,
} from "./styles";

const Projects: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [auxTitle, setAuxTitle] = React.useState("");
  return (
    <Container>
      <Title>Principais Projetos</Title>
      <ProjectContent>
        <DesktopVersion>
          <Grid container spacing={3}>
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                left: -1200,
                right: 0,
                bottom: 0,
              }}
            >
              <MyGridContent>
                <CardContent>
                  <Card>
                    <TitleCard>Quem Vai</TitleCard>
                    <Text>
                      O ”Quem Vai” é uma aplicação web voltada a fomentar o
                      lazer principalmente para os mais jovens.
                      <div>
                        Dentro do projeto, fui responsável por trabalhar junto
                        com uma equipe e desenvolver o Front-end da aplicação em
                        React.
                        <PlusIcon
                          onClick={() => {
                            setOpen(true);
                            setAuxTitle("Quem Vai");
                          }}
                        />
                      </div>
                    </Text>
                  </Card>
                </CardContent>
                <CardContent>
                  <Card>
                    <TitleCard>Clone Whatsapp</TitleCard>
                    <Text>
                      O clone do sistema de WhatsApp está sendo feito em React
                      com Typescript e de backend está sendo utilizado o
                      FireBase.
                      <div>
                        Estou realizando esse projeto para aplicar
                        responsividade ao WhatsApp Web,cadastrar usuários e
                        realizar um chat de conversa em tempo real.
                        <PlusIcon
                          onClick={() => {
                            setOpen(true);
                            setAuxTitle("Clone Whatsapp");
                          }}
                        />
                      </div>
                    </Text>
                  </Card>
                </CardContent>
                <CardContent>
                  <Card>
                    <TitleCard>Esse Site</TitleCard>
                    <Text>
                      Esse site, com intuito de divulgar meu trabalho e me
                      expressar como dev.
                      <div>
                        Ele foi feito em React com auxílio do Material UI para
                        grid e Bootstrap para componentes.
                      </div>
                      <div>
                        A UI do site foi feita pelo meu amigo Pedro Emerenciano,
                        vale conferir
                        <a
                          href="https://www.linkedin.com/in/pedro-emerenciano/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          seu trabalho.
                        </a>
                        <PlusIcon
                          onClick={() => {
                            setOpen(true);
                            setAuxTitle("Esse Site");
                          }}
                        />
                      </div>
                    </Text>
                  </Card>
                </CardContent>
                <CardContent>
                  <Card>
                    <TitleCard>Abecedário</TitleCard>
                    <Text>
                      Esse app foi feito com o objetivo auxiliar os professores
                      na alfabetização infantil, principalmente via EAD.
                      <div>
                        Foi desenvolvido em conjunto com um time de designers e
                        pedagogas, fazendo com que o aplicativo tenha uma base
                        sólida.
                        <PlusIcon
                          onClick={() => {
                            setOpen(true);
                            setAuxTitle("Abecedário");
                          }}
                        />
                      </div>
                    </Text>
                  </Card>
                </CardContent>
              </MyGridContent>
            </motion.div>
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
                    <PlusIcon
                      onClick={() => {
                        setOpen(true);
                        setAuxTitle("Quem Vai");
                      }}
                    />
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
                    <PlusIcon
                      onClick={() => {
                        setOpen(true);
                        setAuxTitle("Clone Whatsapp");
                      }}
                    />
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
                    <PlusIcon
                      onClick={() => {
                        setOpen(true);
                        setAuxTitle("Esse Site");
                      }}
                    />
                  </div>
                </Text>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <TitleCard>Abecedário</TitleCard>
                <Text>
                  Esse app foi feito com o objetivo auxiliar os professores na
                  alfabetização infantil, principalmente via EAD.
                  <div>
                    Foi desenvolvido em conjunto com um time de designers e
                    pedagogas, fazendo com que o aplicativo tenha uma base
                    sólida.
                    <PlusIcon
                      onClick={() => {
                        setOpen(true);
                        setAuxTitle("Abecedário");
                      }}
                    />
                  </div>
                </Text>
              </Card>
            </Carousel.Item>
          </Carousel>
        </CellPhoneVersion>
      </ProjectContent>
      {open ? (
        <ModalInformation
          Title={auxTitle}
          Open={open}
          onClose={() => setOpen(false)}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Projects;
