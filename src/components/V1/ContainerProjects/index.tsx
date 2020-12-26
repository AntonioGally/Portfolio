import React from "react";
import Carousel from "react-elastic-carousel";

import QuemVai from "../../../img/material/QuemVai.png";
import git from "../../../img/material/git.png";
import tui from "../../../img/material/tui.png";
import zap from "../../../img/material/zap.png";

import {
  Container,
  TextContent,
  Title,
  SubTitle,
  ProjectsContent,
  ImageProject,
} from "./styles";

const ContainerProjects: React.FC = () => {
  var breakPointList = [
    {
      width: 768,
      itemsToShow: 1,
      itemsToScroll: 1,
    },
    {
      width: 800,
      itemsToShow: 2,
      itemsToScroll: 1,
    },
    {
      width: 1200,
      itemsToShow: 3,
      itemsToScroll: 1,
    },
  ];
  return (
    <Container>
      <TextContent>
        <Title>My Recent Work</Title>
        <SubTitle>
          Here are a few code projects i’ve working on recently. Want to see
          more?
          <span>
            {" "}
            <a href="mailto:antonio.gally@gmail.com">Email me.</a>
          </span>
        </SubTitle>
      </TextContent>
      <ProjectsContent>
        <Carousel
          itemsToShow={3}
          disableArrowsOnEnd={false}
          breakPoints={breakPointList}
          showArrows={false}
        >
          <a
            href="https://github.com/AntonioGally/QuemVai_Front-End"
            target="_blank"
            rel="noreferrer"
          >
            <ImageProject src={QuemVai} alt="ImageProject" />
          </a>
          <a
            href="https://github.com/AntonioGally/Clone-Github"
            target="_blank"
            rel="noreferrer"
          >
            <ImageProject src={git} alt="ImageProject" />
          </a>
          <a
            href="https://github.com/AntonioGally/Clone-Tweeter"
            target="_blank"
            rel="noreferrer"
          >
            <ImageProject src={tui} alt="ImageProject" />
          </a>
          <a
            href="https://github.com/AntonioGally/CloneWhatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <ImageProject src={zap} alt="ImageProject" />
          </a>
        </Carousel>
        {/* <Grid container spacing={3}>
          <Grid item md={4} lg={4}></Grid>
          <Grid item md={4} lg={4}></Grid>
          <Grid item md={4} lg={4}></Grid>
        </Grid> */}
      </ProjectsContent>
    </Container>
  );
};

export default ContainerProjects;
