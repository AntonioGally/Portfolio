import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
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
