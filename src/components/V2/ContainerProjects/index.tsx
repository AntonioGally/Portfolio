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

import { ListProject } from "./ProjectList";

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
                left: -1600,
                right: 0,
                bottom: 0,
              }}
            >
              <MyGridContent>
                {ListProject().map((data, index) => (
                  <CardContent key={index}>
                    <Card>
                      <TitleCard>{data.title}</TitleCard>
                      <Text>
                        {data.text01}
                        {data.text02 && (
                          <>
                            <div>
                              {data.text02}
                              <PlusIcon
                                onClick={() => {
                                  setOpen(true);
                                  setAuxTitle(data.title);
                                }}
                              />
                            </div>
                          </>
                        )}
                      </Text>
                    </Card>
                  </CardContent>
                ))}
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
              </MyGridContent>
            </motion.div>
          </Grid>
        </DesktopVersion>
        <CellPhoneVersion>
          <Carousel controls={false}>
            {ListProject().map((data, index) => (
              <Carousel.Item key={index}>
                <Card>
                  <TitleCard>{data.title}</TitleCard>
                  <Text>
                    {data.text01}
                    {data.text02 && (
                      <>
                        <div>
                          {data.text02}
                          <PlusIcon
                            onClick={() => {
                              setOpen(true);
                              setAuxTitle(data.title);
                            }}
                          />
                        </div>
                      </>
                    )}
                  </Text>
                </Card>
              </Carousel.Item>
            ))}
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
