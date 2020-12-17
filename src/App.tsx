import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Transition from "./components/Transition";
import ContainerHabilities from "./components/ContainerHabilities";
import ContainerProjects from "./components/ContainerProjects";
function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Transition />
      <ContainerHabilities />
      <ContainerProjects />
    </div>
  );
}

export default App;
