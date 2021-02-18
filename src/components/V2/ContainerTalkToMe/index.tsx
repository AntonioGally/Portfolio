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
  CheckIcon,
} from "./styles";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";

import { useForm } from "react-hook-form";
import { db, firebase } from "./FireBaseUtils";

type TextForm = {
  userName: string;
  userEmail: string;
  userMesage: string;
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContainerTalkToMe: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<TextForm>();
  const [open, setOpen] = React.useState(false);

  const SubmitForm = async (data: TextForm) => {
    db.collection("mensagens").add({
      email: data.userEmail,
      mensagem: data.userMesage,
      nome: data.userName,
      sended: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setOpen(true);
    var userNameInput = document.getElementById("userName") as HTMLInputElement;
    userNameInput.value = "";

    var userEmailInput = document.getElementById(
      "userEmail"
    ) as HTMLInputElement;
    userEmailInput.value = "";

    var userMesageInput = document.getElementById(
      "userMesage"
    ) as HTMLInputElement;
    userMesageInput.value = "";
  };

  return (
    <Container id="ContainerTalkToMe">
      <Title>Fale comigo</Title>
      <form onSubmit={handleSubmit(SubmitForm)} id="formMessage">
        <FormContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <InputContent>
                <TitleInput>Nome:</TitleInput>
                <MyInput
                  type="text"
                  name="userName"
                  id="userName"
                  ref={register({
                    minLength: {
                      value: 3,
                      message: "Insira no mínimo 3 caractéres",
                    },
                    maxLength: {
                      value: 40,
                      message: "Insira no máximo 40 caractéres",
                    },
                    required: {
                      value: true,
                      message: "Insira seu nome",
                    },
                  })}
                />
                {errors.userName &&
                  (errors.userName as any).type === "minLength" && (
                    <div className="error">
                      {(errors.userName as any).message}
                    </div>
                  )}
                {errors.userName &&
                  (errors.userName as any).type === "maxLength" && (
                    <div className="error">
                      {(errors.userName as any).message}
                    </div>
                  )}
                {errors.userName &&
                  (errors.userName as any).type === "required" && (
                    <div className="error">
                      {(errors.userName as any).message}
                    </div>
                  )}
              </InputContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <InputContent>
                <TitleInput>Email:</TitleInput>
                <MyInput
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  ref={register({
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Insira um email válido",
                    },
                    required: {
                      value: true,
                      message: "Insira seu email",
                    },
                  })}
                />
                {errors.userEmail &&
                  (errors.userEmail as any).type === "pattern" && (
                    <div className="error">
                      {(errors.userEmail as any).message}
                    </div>
                  )}
                {errors.userEmail &&
                  (errors.userEmail as any).type === "required" && (
                    <div className="error">
                      {(errors.userEmail as any).message}
                    </div>
                  )}
              </InputContent>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <InputContent>
                <TitleInput>Mensagem:</TitleInput>
                <MyTextArea
                  name="userMesage"
                  id="userMesage"
                  rows={12}
                  ref={register({
                    minLength: {
                      value: 20,
                      message: "Insira no mínimo 20 caractéres",
                    },
                    maxLength: {
                      value: 300,
                      message: "Insira no máximo 300 caractéres",
                    },
                    required: {
                      value: true,
                      message: "Insira uma mensagem",
                    },
                  })}
                />
                {errors.userMesage &&
                  (errors.userMesage as any).type === "minLength" && (
                    <div className="error">
                      {(errors.userMesage as any).message}
                    </div>
                  )}
                {errors.userMesage &&
                  (errors.userMesage as any).type === "maxLength" && (
                    <div className="error">
                      {(errors.userMesage as any).message}
                    </div>
                  )}
                {errors.userMesage &&
                  (errors.userMesage as any).type === "required" && (
                    <div className="error">
                      {(errors.userMesage as any).message}
                    </div>
                  )}
              </InputContent>
            </Grid>
          </Grid>
          <ButtonContent>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Enviar
            </Button>
          </ButtonContent>
        </FormContent>
      </form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ textAlign: "center" }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Mensagem enviada com sucesso!"}
        </DialogTitle>
        <DialogContent>
          <CheckIcon />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContainerTalkToMe;
