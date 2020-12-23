import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import GlobalStyles from "../../styles/GlobalStyles";


import ProgressCircle from "../../components/V1/ProgressCircle";
import Header from "../../components/V1/Header";
import Introduction from "../../components/V1/Introduction";
import Transition from "../../components/V1/Transition";
import ContainerHabilities from "../../components/V1/ContainerHabilities";
import ContainerProjects from "../../components/V1/ContainerProjects";
import Footer from "../../components/V1/Footer";

const V1: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflowX: "hidden" }}>
        <GlobalStyles />

        <ProgressCircle />
        <Header toggleTheme={toggleTheme} />
        <Introduction />
        <Transition />
        <ContainerHabilities />
        <ContainerProjects />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default V1;
