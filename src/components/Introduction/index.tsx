import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import Avatar from "../../img/material/Avatar.png";
import bottomImage from "../../img/material/bottomImage.png";
import bottomImageWhite from "../../img/material/bottomImageWhite.png";
import {
  TitleContent,
  Title,
  SubTitle,
  AvatarContent,
  AvatarIcon,
  BottomImageContent,
  BottonImage,
} from "./styles";

const Introduction: React.FC = () => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <TitleContent>
        <Title>Front-end Developer & Student</Title>
        <SubTitle>
          I code beaultifuly simple things, and i love what i do.
        </SubTitle>
      </TitleContent>
      <AvatarContent>
        <AvatarIcon src={Avatar} alt="My Avatar Face" />
      </AvatarContent>
      <BottomImageContent>
        <BottonImage
          src={title === "dark" ? bottomImageWhite : bottomImage}
          alt="Bottom Image"
        />
      </BottomImageContent>
    </>
  );
};

export default Introduction;
