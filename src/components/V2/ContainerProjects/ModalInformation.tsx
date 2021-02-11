import React from "react";
import { TitleModal, TextModal } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface Props {
  Title: string;
  Open: boolean;
  onClose: any;
}

const ContainerProjects: React.FC<Props> = ({ Title, Open, onClose }) => {
  const StyledModal = withStyles({
    paper: {
      background: "#121212",
    },
  })(Dialog);
  return (
    <>
      <StyledModal
        open={Open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <TitleModal>{Title}</TitleModal>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextModal>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </TextModal>
          </DialogContentText>
        </DialogContent>
      </StyledModal>
    </>
  );
};

export default ContainerProjects;
