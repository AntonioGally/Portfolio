import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  Title,
  TecnologyContent,
  IconContent,
  TsIcon,
  JsIcon,
  ReactIcon,
  SubTitle,
} from "./styles";

const ContainerTecnology: React.FC = () => {
  return (
    <Container>
      <Title>Tecnologias</Title>
      <TecnologyContent>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={4} lg={4}>
            <IconContent>
              <TsIcon />
              <SubTitle>Typescript</SubTitle>
            </IconContent>
          </Grid>
          <Grid item xs={4} lg={4}>
            <IconContent>
              <JsIcon />
              <SubTitle>Javascript</SubTitle>
            </IconContent>
          </Grid>
          <Grid item xs={4} lg={4}>
            <IconContent>
              <ReactIcon />
              <SubTitle>React JS</SubTitle>
            </IconContent>
          </Grid>
        </Grid>
      </TecnologyContent>
    </Container>
  );
};

export default ContainerTecnology;
