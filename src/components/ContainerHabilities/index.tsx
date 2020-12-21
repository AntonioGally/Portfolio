import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-elastic-carousel";
import frontendIcon from "../../img/icons/frontendIcon.svg";
import backendIcon from "../../img/icons/backendIcon.jpeg";
import studentIcon from "../../img/icons/studentIcon.svg";
import { motion } from "framer-motion";
import {
  Container,
  DesktopVersion,
  ContentCol,
  Header,
  IconContainer,
  TextContent,
  TitleHeader,
  TextHeader,
  Middle,
  TitleMiddle,
  TextMiddle,
  End,
  TitleEnd,
  TextEnd,
  CellPhoneVersion,
} from "./styles";

const ContainerHabilities: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        drag
        dragConstraints={{
          top: -5,
          left: -5,
          right: 5,
          bottom: 5,
        }}
      >
        <Container style={{ cursor: "grab" }}>
          <DesktopVersion>
            <Grid container spacing={3}>
              <Grid item md={4} lg={4}>
                <ContentCol>
                  <Header>
                    <IconContainer src={frontendIcon} alt="IconContainer" />
                    <TextContent>
                      <TitleHeader>Front-end Developer</TitleHeader>
                      <TextHeader>
                        I like to work with competent teams, I also love to code
                        the project from the beginning
                      </TextHeader>
                    </TextContent>
                  </Header>
                  <Middle>
                    <TextContent>
                      <TitleMiddle>Languages that i learned:</TitleMiddle>
                      <TextMiddle>React JS, HTML, CSS, JS, TS</TextMiddle>
                    </TextContent>
                  </Middle>
                  <End>
                    <TextContent>
                      <TitleEnd>Dev Tools:</TitleEnd>
                      <TextEnd>Bootstrap</TextEnd>
                      <TextEnd>Material UI</TextEnd>
                      <TextEnd>GitHub</TextEnd>
                      <TextEnd>Netlify</TextEnd>
                      <TextEnd>Heroku</TextEnd>
                    </TextContent>
                  </End>
                </ContentCol>
              </Grid>
              <Grid item md={4} lg={4}>
                <ContentCol>
                  <Header>
                    <IconContainer src={backendIcon} alt="IconContainer" />
                    <TextContent>
                      <TitleHeader>Back-end Developer</TitleHeader>
                      <TextHeader>
                        I started programming systems on the backend and today I
                        manage to develop both areas with mastery
                      </TextHeader>
                    </TextContent>
                  </Header>
                  <Middle style={{ marginTop: "6%" }}>
                    <TextContent>
                      <TitleMiddle>Languages I speak:</TitleMiddle>
                      <TextMiddle>C++, Phyton, Node JS, PHP, SQL</TextMiddle>
                    </TextContent>
                  </Middle>
                  <End>
                    <TextContent>
                      <TitleEnd>Dev Tools:</TitleEnd>
                      <TextEnd>Django</TextEnd>
                      <TextEnd>Express</TextEnd>
                      <TextEnd>Google Maps API</TextEnd>
                      <TextEnd>Terminal</TextEnd>
                      <TextEnd>WebSocket</TextEnd>
                    </TextContent>
                  </End>
                </ContentCol>
              </Grid>
              <Grid item md={4} lg={4}>
                <ContentCol>
                  <Header>
                    <IconContainer src={studentIcon} alt="IconContainer" />
                    <TextContent>
                      <TitleHeader>Student</TitleHeader>
                      <TextHeader>
                        I finished my technical course recently, and I have
                        several certificates in the area.
                      </TextHeader>
                    </TextContent>
                  </Header>
                  <Middle style={{ marginTop: "11%" }}>
                    <TextContent>
                      <TitleMiddle>My Experiences:</TitleMiddle>
                      <TextMiddle>
                        Technician, Extra Classes, Certificates
                      </TextMiddle>
                    </TextContent>
                  </Middle>
                  <End>
                    <TextContent>
                      <TitleEnd>My Stats:</TitleEnd>
                      <TextEnd>Alura Class</TextEnd>
                      <TextEnd>Udemy</TextEnd>
                      <TextEnd>ICSI UK</TextEnd>
                      <TextEnd>ETEC HAS</TextEnd>
                      <TextEnd>Facebook Lectures</TextEnd>
                    </TextContent>
                  </End>
                </ContentCol>
              </Grid>
            </Grid>
          </DesktopVersion>
          <CellPhoneVersion>
            <Carousel
              itemsToShow={1}
              disableArrowsOnEnd={false}
              enableSwipe={true}
              showArrows={false}
            >
              <ContentCol>
                <Header>
                  <IconContainer src={frontendIcon} alt="IconContainer" />
                  <TextContent>
                    <TitleHeader>Front-end Developer</TitleHeader>
                    <TextHeader>
                      I like to work with competent teams, I also love to code
                      the project from the beginning
                    </TextHeader>
                  </TextContent>
                </Header>
                <Middle>
                  <TextContent>
                    <TitleMiddle>Languages that i learned:</TitleMiddle>
                    <TextMiddle>React JS, HTML, CSS, JS, TS</TextMiddle>
                  </TextContent>
                </Middle>
                <End>
                  <TextContent>
                    <TitleEnd>Dev Tools:</TitleEnd>
                    <TextEnd>Bootstrap</TextEnd>
                    <TextEnd>Material UI</TextEnd>
                    <TextEnd>GitHub</TextEnd>
                    <TextEnd>Netlify</TextEnd>
                    <TextEnd>Heroku</TextEnd>
                  </TextContent>
                </End>
              </ContentCol>
              <ContentCol>
                <Header>
                  <IconContainer src={backendIcon} alt="IconContainer" />
                  <TextContent>
                    <TitleHeader>Back-end Developer</TitleHeader>
                    <TextHeader>
                      I started programming systems on the backend and today I
                      manage to develop both areas with mastery
                    </TextHeader>
                  </TextContent>
                </Header>
                <Middle style={{ marginTop: "6%" }}>
                  <TextContent>
                    <TitleMiddle>Languages I speak:</TitleMiddle>
                    <TextMiddle>C++, Phyton, Node JS, PHP, SQL</TextMiddle>
                  </TextContent>
                </Middle>
                <End>
                  <TextContent>
                    <TitleEnd>Dev Tools:</TitleEnd>
                    <TextEnd>Django</TextEnd>
                    <TextEnd>Express</TextEnd>
                    <TextEnd>Google Maps API</TextEnd>
                    <TextEnd>Terminal</TextEnd>
                    <TextEnd>WebSocket</TextEnd>
                  </TextContent>
                </End>
              </ContentCol>
              <ContentCol>
                <Header>
                  <IconContainer src={studentIcon} alt="IconContainer" />
                  <TextContent>
                    <TitleHeader>Student</TitleHeader>
                    <TextHeader>
                      I finished my technical course recently, and I have
                      several certificates in the area.
                    </TextHeader>
                  </TextContent>
                </Header>
                <Middle style={{ marginTop: "11%" }}>
                  <TextContent>
                    <TitleMiddle>My Experiences:</TitleMiddle>
                    <TextMiddle>
                      Technician, Extra Classes, Certificates
                    </TextMiddle>
                  </TextContent>
                </Middle>
                <End>
                  <TextContent>
                    <TitleEnd>My Stats:</TitleEnd>
                    <TextEnd>Alura Class</TextEnd>
                    <TextEnd>Udemy</TextEnd>
                    <TextEnd>ICSI UK</TextEnd>
                    <TextEnd>ETEC HAS</TextEnd>
                    <TextEnd>Facebook Lectures</TextEnd>
                  </TextContent>
                </End>
              </ContentCol>
            </Carousel>
          </CellPhoneVersion>
        </Container>
      </motion.div>
    </div>
  );
};

export default ContainerHabilities;
