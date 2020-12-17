import React from "react";
import logo from "../../img/logo/logo.png";

import { MyRow, Logo, Button } from "./styles";
const Header: React.FC = () => {
  return (
    <>
      <MyRow>
        <Logo src={logo} alt="My Logo" />
        <Button>Say Hello</Button>
      </MyRow>
    </>
  );
};

export default Header;
