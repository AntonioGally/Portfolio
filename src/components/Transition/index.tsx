import React from "react";

import { Container, TextContent, Title, Text } from "./styles";

const Transition: React.FC = () => {
  return (
    <Container>
      <TextContent>
        <Title>Hi, i'm Antônio. Nice to meet you {":)"}</Title>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </Text>
      </TextContent>
    </Container>
  );
};

export default Transition;
