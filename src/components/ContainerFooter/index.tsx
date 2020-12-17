import React from "react";
import Grid from "@material-ui/core/Grid";

import { Container, Title, Text, Button } from "./styles";

const ContainerFooter: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={12} md={4} style={{ textAlign: "center" }}>
          <Title>Start a project</Title>
        </Grid>
        <Grid item lg={4} xs={12} md={4} style={{ textAlign: "center" }}>
          <Text>
            Interested in working together? We should talk about’it :)
          </Text>
        </Grid>
        <Grid item lg={4} xs={12} md={4}>
          <Button>
            <a href="mailto:antonio.gally@gmail.com">Let's do This</a>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContainerFooter;
