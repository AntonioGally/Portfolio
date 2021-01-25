import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  padding: 0 30px;
  @media (max-width: 768px) {
    margin: 35% auto 0 auto;
  }
  margin: 10% auto 0 auto;
`;
export const Title = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
  position: relative;
  display: flex;
  justify-content: center;
  color: var(--fontPrimary);
  ::before {
    content: "";
    width: 100px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    top: -13px;
    left: calc(50% - 50px);
  }
`;
export const FormContent = styled.div`
  background: linear-gradient(
    101.26deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 500px;
  width: 100%;
  margin: 5% 0 0 0;
  padding: 45px;
  border-radius: 16px;
`;
