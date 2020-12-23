import React from "react";
import NewGlobalStyles from "../../styles/NewGlobalStyles";
import Vector from "../../img/aa.png";

import Header from "../../components/V2/Header";
import TextCenter from "../../components/V2/TextCenter";

import { Container, MyImage } from "./styles";

const V2: React.FC = () => {
  return (
    <div>
      <NewGlobalStyles />
      <Container>
        <MyImage src={Vector} alt="teste" />
        <Header />
        <TextCenter />
      </Container>
    </div>
  );
};

export default V2;
