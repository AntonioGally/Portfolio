import React from "react";
import Avatar from "../../img/material/Avatar.png";
import bottomImage from "../../img/material/bottomImage.png";
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
        <BottonImage src={bottomImage} alt="Bottom Image" />
      </BottomImageContent>
    </>
  );
};

export default Introduction;
