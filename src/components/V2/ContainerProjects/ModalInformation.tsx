import React from "react";
import {
  TitleModal,
  TextModal,
  ImageModal,
  MyDialogContent,
  ListModal,
  ListItem,
  MyHeaderModal,
  CloseIcon,
} from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export interface Props {
  Title: string;
  Open: boolean;
  onClose: any;
}
//titulo
//texto
//imagem
//tecnologia
const ContainerProjects: React.FC<Props> = ({ Title, Open, onClose }) => {
  // const ListProjetcs = [
  //   {
  //     Title: {
  //       Text:
  //         "Existem vários aplicativos de encontro disponíveis no mercado hoje em dia, mas nós queríamos algo mais. Por meio do aplicativo Quem Vai, nós democratizamos a busca e o uso de áreas de lazer, ciente que a maior plataforma de mapas que nós temos (google maps) não nos informa com especificidade todas as áreas de lazer dispníveis nas regiões próximas, e suas características.",
  //       Image:
  //         "https://raw.githubusercontent.com/AntonioGally/QuemVai_Front-End/AplicationWeb/src/img/logo/QuemVaiLogo2.png",
  //       Tecnology: [
  //         "React JS",
  //         "Typescript",
  //         "Firebase",
  //         "Framer Motion",
  //         "Material UI",
  //         "Bootstrap",
  //         "React Hook Form",
  //         "Styled Components",
  //       ],
  //     },
  //   },
  // ];
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const StyledModal = withStyles({
    paper: {
      background: "#121212",
      padding: "15px",
    },
  })(Dialog);
  return (
    <>
      <StyledModal
        fullScreen={fullScreen}
        maxWidth="lg"
        open={Open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MyHeaderModal>
            <TitleModal>
              <a
                href="https://github.com/AntonioGally/QuemVai_Front-End"
                target="_blank"
                rel="noreferrer"
              >
                {Title}
              </a>
            </TitleModal>
            <CloseIcon onClick={onClose} />
          </MyHeaderModal>
        </DialogTitle>
        <MyDialogContent>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                  <TextModal>
                    Existem vários aplicativos de encontro disponíveis no
                    mercado hoje em dia, mas nós queríamos algo mais. Por meio
                    do aplicativo Quem Vai, nós democratizamos a busca e o uso
                    de áreas de lazer, ciente que a maior plataforma de mapas
                    que nós temos (google maps) não nos informa com
                    especificidade todas as áreas de lazer dispníveis nas
                    regiões próximas, e suas características.
                  </TextModal>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{ textAlign: "center" }}
                >
                  <ImageModal
                    src="https://raw.githubusercontent.com/AntonioGally/QuemVai_Front-End/AplicationWeb/src/img/logo/QuemVaiLogo2.png"
                    alt="Project description"
                  />
                </Grid>
              </Grid>
              <Grid
                style={{ marginTop: "4%" }}
                container
                spacing={3}
                justify="flex-start"
                direction="column"
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TitleModal>Tecnologias usadas</TitleModal>
                  <ListModal>
                    <ul>
                      <ListItem>React JS</ListItem>
                      <ListItem>Typescript</ListItem>
                      <ListItem>Firebase</ListItem>
                      <ListItem>Framer Motion</ListItem>
                    </ul>
                    <ul>
                      <ListItem>Material UI</ListItem>
                      <ListItem>Bootstrap</ListItem>
                      <ListItem>React Hook Form</ListItem>
                      <ListItem>Styled Components</ListItem>
                    </ul>
                  </ListModal>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </MyDialogContent>
      </StyledModal>
    </>
  );
};

export default ContainerProjects;
