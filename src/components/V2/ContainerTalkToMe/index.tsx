import React from "react";

import {
  Container,
  Title,
  FormContent,
  InputContent,
  TitleInput,
  MyInput,
  MyTextArea,
  ButtonContent,
} from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ContainerTalkToMe: React.FC = () => {
  return (
    <Container>
      <Title>Fale comigo</Title>
      <FormContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <InputContent>
              <TitleInput>Nome:</TitleInput>
              <MyInput type="text" />
            </InputContent>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <InputContent>
              <TitleInput>Email:</TitleInput>
              <MyInput type="text" />
            </InputContent>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <InputContent>
              <TitleInput>Mensagem:</TitleInput>
              <MyTextArea name="mensage" rows={12} />
            </InputContent>
          </Grid>
        </Grid>
        <ButtonContent>
          <Button variant="contained" color="primary" size="large">
            Enviar
          </Button>
        </ButtonContent>
      </FormContent>
    </Container>
  );
};

export default ContainerTalkToMe;
