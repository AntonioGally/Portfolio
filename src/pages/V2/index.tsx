import React from "react";
import NewGlobalStyles from "../../styles/NewGlobalStyles";
import Vector from "../../img/aa.png";
import Vector2 from "../../img/aaaa.png";

import Header from "../../components/V2/Header";
import TextCenter from "../../components/V2/TextCenter";
import ContainerAboutMe from "../../components/V2/ContainerAboutMe";
import ContainerProjects from "../../components/V2/ContainerProjects";
import ContainerTecnology from "../../components/V2/ContainerTecnology";
import ContainerTalkToMe from "../../components/V2/ContainerTalkToMe";

import { Container, MyImage, MyImageBottom } from "./styles";

const V2: React.FC = () => {
  return (
    <div>
      <NewGlobalStyles />
      <Container>
        <MyImage src={Vector} alt="Vector" />
        <Header />
        <TextCenter />
        <ContainerAboutMe />
        <ContainerProjects />
        <ContainerTecnology />
        <div
          style={{
            position: "relative",
          }}
        >
          <ContainerTalkToMe />
          <MyImageBottom src={Vector2} alt="Vector" />
        </div>
      </Container>
    </div>
  );
};

export default V2;
