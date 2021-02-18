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

const ContainerProjects: React.FC<Props> = ({ Title, Open, onClose }) => {
  const ListProjetcs = [
    {
      Title: "Quem Vai",
      Link: "https://github.com/AntonioGally/QuemVai_Front-End",
      Text:
        "Existem vários aplicativos de encontro disponíveis no mercado hoje em dia, mas nós queríamos algo mais. Por meio do aplicativo Quem Vai, nós democratizamos a busca e o uso de áreas de lazer, ciente que a maior plataforma de mapas que nós temos (google maps) não nos informa com especificidade todas as áreas de lazer dispníveis nas regiões próximas, e suas características.",
      Image:
        "https://raw.githubusercontent.com/AntonioGally/QuemVai_Front-End/AplicationWeb/src/img/logo/QuemVaiLogo2.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Firebase",
        "Framer Motion",
        "Material UI",
        "Bootstrap",
        "React Hook Form",
        "Styled Components",
      ],
    },
    {
      Title: "Clone Whatsapp",
      Link: "https://github.com/AntonioGally/CloneWhatsapp",
      Text:
        "TonyZap é um aplicativo clone do WhatsAppWeb com o objetivo de conhecer tecnologias novas e adicionar responsividade ao projeto original. Este projeto ainda está em desenvolvimento e contará com versão mobile que será desenvolvida em React Native em conjunto com um novo desing ao aplicativo, trazendo mais acessibilidade e usabilidade ao projeto.",
      Image:
        "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png",
      Tecnology: [
        "React JS",
        "React Native",
        "Typescript",
        "Firebase",
        "Framer Motion",
        "Material UI",
        "Bootstrap",
        "Styled Components",
        "Emoji Picker",
        "Web Vitals",
      ],
    },
    {
      Title: "Esse Site",
      Link: "https://github.com/AntonioGally/Portfolio",
      Text:
        "Fiz esse portfólio porque precisava de uma plataforma para postar meus projetos futuros, sei que existe o GitHub, mas essa plataforma é mais voltada para Devs. Quanto ao design do portfólio, me inspirei em vários na internet, e fiz o meu com algumas modificações. Este portfólio conta com uma área de administração que me auxilia a postar novos projetos, gerenciar as mensagens recebidas e trabalhar na escalabilidade do projeto pensando em dados estatísticos",
      Image:
        "https://raw.githubusercontent.com/AntonioGally/Portfolio/master/src/img/logo/logoWhite.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Firebase",
        "Framer Motion",
        "Material UI",
        "Bootstrap",
        "Styled Components",
        "Styked Icons",
        "React Hook Form",
        "React Router Doom",
      ],
    },
    {
      Title: "Abecedário",
      Link: "https://abecedario.apliqueducacao.com.br",
      Text:
        "O aplicativo foi desenvolvido com foco no auxílio da alfabetização infantil. Ele possui três páginas explicativas: som das letras, tipos de letra contendo ilustração de palavras e a principal função que é a ilustração da grafia das letras, onde a criança consegue aprender a escrever observando a animação de gafria. Foi feita em conjunto da startUp ApliquEducação.",
      Image:
        "https://abecedario.apliqueducacao.com.br/static/media/logoAplique.ff0ca692.png",
      Tecnology: [
        "React JS",
        "Typescript",
        "Framer Motion",
        "Material UI",
        "Styled Components",
        "Howler",
      ],
    },
  ];
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
        {ListProjetcs.map((information) => (
          <div
            style={information.Title === Title ? {} : { display: "none" }}
            key={information.Title}
          >
            <DialogTitle id="alert-dialog-title">
              <MyHeaderModal>
                <TitleModal>
                  <a
                    href={
                      information.Title === Title
                        ? information.Link
                        : "www.github.com/AntonioGally"
                    }
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
                  <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                      <TextModal>
                        {information.Title === Title ? information.Text : ""}
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
                        src={
                          information.Title === Title ? information.Image : ""
                        }
                        alt="Project Image"
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
                        {information.Title === Title ? (
                          information.Tecnology.length <= 4 ? (
                            <>
                              {information.Tecnology.map((data) => (
                                <ListItem>{data}</ListItem>
                              ))}
                            </>
                          ) : information.Tecnology.length <= 8 ? (
                            <>
                              <ul>
                                {information.Tecnology.slice(0, 4).map(
                                  (data) => (
                                    <ListItem>{data}</ListItem>
                                  )
                                )}
                              </ul>
                              <ul>
                                {information.Tecnology.slice(4, 9).map(
                                  (data) => (
                                    <ListItem>{data}</ListItem>
                                  )
                                )}
                              </ul>
                            </>
                          ) : information.Tecnology.length <= 12 ? (
                            <>
                              <ul>
                                {information.Tecnology.slice(0, 4).map(
                                  (data) => (
                                    <ListItem>{data}</ListItem>
                                  )
                                )}
                              </ul>
                              <ul>
                                {information.Tecnology.slice(4, 8).map(
                                  (data) => (
                                    <ListItem>{data}</ListItem>
                                  )
                                )}
                              </ul>
                              <ul>
                                {information.Tecnology.slice(9, 13).map(
                                  (data) => (
                                    <ListItem>{data}</ListItem>
                                  )
                                )}
                              </ul>
                            </>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </ListModal>
                    </Grid>
                  </Grid>
                </DialogContentText>
              </DialogContent>
            </MyDialogContent>
          </div>
        ))}
      </StyledModal>
    </>
  );
};

export default ContainerProjects;
