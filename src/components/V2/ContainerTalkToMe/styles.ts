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
    rgb(125 125 125 / 6%) 0%,
    rgb(47 47 47 / 15%) 100%
  );
  width: 100%;
  margin: 5% 0 0 0;
  padding: 45px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  border-radius: 16px;
`;

export const InputContent = styled.div`
  padding: 10px;
`;
export const TitleInput = styled.div`
  font-family: "Sora";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: var(--fontPrimary);
  margin-bottom: 10px;
`;
export const MyInput = styled.input`
  background: #111111;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  height: 50px;
  width: 100%;
  border: none;
  outline: 0;
`;
export const MyTextArea = styled.textarea`
  background: #111111;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  width: 100%;
  border: none;
  outline: 0;
`;
export const ButtonContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 12px;
`;
