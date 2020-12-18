import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import logo from "../../img/logo/logo.png";
import logoWhite from "../../img/logo/logoWhite.png";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { MyRow, Logo, Button } from "./styles";

export interface Props {
  toggleTheme: any;
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <MyRow>
        <Logo src={title === "dark" ? logoWhite : logo} alt="My Logo" />
        <div>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={title === "dark"}
                  onChange={toggleTheme}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Theme"
            />
            <Button
              style={
                title === "dark"
                  ? {
                      backgroundColor: "var(--primary)",
                    }
                  : {}
              }
            >
              <a
                href="mailto:antonio.gally@gmail.com"
                style={
                  title === "dark"
                    ? {
                        color: "var(--fontWhite)",
                      }
                    : {}
                }
              >
                Say Hello
              </a>
            </Button>
          </FormGroup>
        </div>
      </MyRow>
    </>
  );
};

export default Header;
