import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container } from "./styles";

const Header: React.FC = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <Container>
      <span>antonioGally</span>

      <div onClick={() => scrollToBottom()}>
        <Link
          to="ContainerTalkToMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Fale comigo
        </Link>
      </div>
    </Container>
  );
};

export default Header;
