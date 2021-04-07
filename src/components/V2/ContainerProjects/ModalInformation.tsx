import React from "react";
import ProjectList from "./ProjectList";
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
  const ListProjetcsModal = ProjectList();
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
        {ListProjetcsModal.map((information) => (
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
