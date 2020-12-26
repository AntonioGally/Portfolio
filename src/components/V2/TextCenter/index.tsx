import React from "react";

import { Container, SvgContainer } from "./styles";

const TextCenter: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <span>Olá, eu sou</span>
        </div>
        <div>
          <span>o</span>
          <span className="MyName"> Antônio</span>
        </div>
      </Container>
      <SvgContainer>
        <svg
          width="8"
          height="61"
          viewBox="0 0 8 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.64644 60.3536C3.84171 60.5488 4.15829 60.5488 4.35355 60.3536L7.53553 57.1716C7.73079 56.9763 7.73079 56.6597 7.53553 56.4645C7.34027 56.2692 7.02369 56.2692 6.82842 56.4645L4 59.2929L1.17157 56.4645C0.976308 56.2692 0.659726 56.2692 0.464464 56.4645C0.269201 56.6597 0.269201 56.9763 0.464464 57.1716L3.64644 60.3536ZM3.5 -2.18557e-08L3.5 60L4.5 60L4.5 2.18557e-08L3.5 -2.18557e-08Z"
            fill="white"
          />
        </svg>
      </SvgContainer>
    </>
  );
};

export default TextCenter;
