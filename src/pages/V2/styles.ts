import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding-bottom:5%;
  overflow: hidden;
  /* ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  } */
`;

export const MyImage = styled.img`
  filter: blur(100px) drop-shadow(4px 6px 8px black);
  width: 40vw;
  margin-top: -3%;
  margin-left: -3%;
  z-index: -10;
  opacity: 0.9;
  position: absolute;
  @media (max-width: 1000px) {
    width: 70vw;
  }
`;
export const MyImageBottom = styled.img`
  filter: blur(100px) drop-shadow(2px 4px 6px black);
  width: 70vw;
  bottom: -30%;
  left: 15vw;
  z-index: -10;
  opacity: 0.8;
  position: absolute;
  @media (max-width: 1250px) {
    width: 100vw;
    left: -30px;
    bottom:0;
  }
`;
