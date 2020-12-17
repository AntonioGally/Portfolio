import React from "react";
import ContainerFooter from "../ContainerFooter";
import logoWhite from "../../img/logo/logoWhite.png";
import gitHub from "../../img/icons/gitHub.png";
import linkedin from "../../img/icons/linkedin.svg";
import email from "../../img/icons/email.svg";
import {
  Container,
  InformationContent,
  Logo,
  Text,
  IconsContent,
  Icon,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <ContainerFooter />
      <InformationContent>
        <Logo src={logoWhite} alt="My Logo" />
        <Text>If I had a lemon, I would make it a potato</Text>
        <IconsContent>
          <a
            href="https://github.com/AntonioGally"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={gitHub} style={{ marginRight: "25px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/antônio-gally-089bab180/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon src={linkedin} style={{ marginRight: "25px" }} />
          </a>
          <a href="mailto:antonio.gally@gmail.com">
            <Icon src={email} />
          </a>
        </IconsContent>
      </InformationContent>
    </Container>
  );
};

export default Footer;
