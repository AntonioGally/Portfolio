import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Transition from "./components/Transition";
import ContainerHabilities from "./components/ContainerHabilities";
import ContainerProjects from "./components/ContainerProjects";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}/>
        <Introduction />
        <Transition />
        <ContainerHabilities />
        <ContainerProjects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
