import React from "react";

import { Container } from "./styles";

const TextCenter: React.FC = () => {
  return (
    <Container>
      <div>
        <span>Olá, eu sou</span>
      </div>
      <div>
        <span>o</span><span className="MyName"> Antônio</span>
      </div>
    </Container>
  );
};

export default TextCenter;
