import styled, { css } from 'styled-components';
import LoginBackground from '../../images/login-bg.jpg';

export const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-flow: column;
  overflow: hidden;
  position: relative;
`;

export const VideoBG = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ColorBG = styled.div`
  background-color: #583c8b;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;
`;

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: absolute;
  width: 100%;
  bottom: -100vh;
  transition: transform 0.5s ease-in-out;
  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(-100vh);
    `}

  &:after {
    content: '';
    background-color: #3e2a5e;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: -2;
    ${({ visible }) =>
      !visible &&
      css`
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
      `}
  }
`;

export const AppLogo = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 3.5em;
  color: white;
  margin-top: 10vh;
  z-index: 999;
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 65px;

  &:after {
    border-radius: 15px;
    content: '';
    background-color: #000000;
    opacity: 0.85;
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: -1;
  }
`;
export const LoginInput = styled.input`
  background-color: rgb(241, 241, 241);
  border: 1px solid rgb(32, 33, 36);
  border-radius: 3px;
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  transition: background-color 0.3s ease-in;
  width: 200px;

  &:hover {
    background-color: rgb(249, 249, 249);
  }
  &:focus {
    background-color: #9e70f7;
    color: white;
    outline: none;
  }
  &:focus::placeholder {
    color: crimson;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 25px;
  width: 37vh;
  border-radius: 22px;
  border: 0;
  color: white;
  background-color: blueviolet;
  font-weight: 900;
  font-size: 1.4em;
  font-family: 'Nunito Sans', sans-serif;
  margin-top: 60vh;
  z-index: 1;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;

  &:active {
    transform: scale(1.1, 1.1);
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  &:focus {
    outline: none;
  }
`;
