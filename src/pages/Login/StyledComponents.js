import styled, { css, keyframes } from 'styled-components';

export const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
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

const showLogin = keyframes`
  from {
    transform: translateY(0vh);
  }

  to {
    transform: translateY(-100vh);
  }
`;

const showLoginBg = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.6;
  }
`;

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column;
  position: absolute;
  width: 100%;
  bottom: -100vh;
  /* transition: transform 0.5s ease-in-out; */
  ${({ visible }) => visible
  && css`
      animation: ${showLogin} 0.4s ease-out forwards;
    `}
`;

export const LoginContainerBg = styled.div`
  background-color: #3e2a5e;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -2;
    ${({ visible }) => visible
    && css`
        animation: ${showLoginBg} 0.4s ease-out forwards;
      `}
`;

export const AppLogo = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 3.5em;
  color: white;
  margin-top: 10vh;
  z-index: 999;
  transition: transform 0.5s ease-in;
  ${({ login }) => login && css`transform: scale(1.15)`};
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  padding: 8% 30px;
  background-color: white;
  width: 100%;
  height: 60vh;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  /* &:after {
    border-radius: 15px;
    content: '';
    background-color: #000000;
    opacity: 0.55;
    width: 300px;
    height: 220px;
    position: absolute;
    z-index: -1;
  } */
`;
export const LoginHeader = styled.h2`
  color: #393939;
  align-self: flex-start;
`;

export const LoginInput = styled.input`
  background-color: rgb(241, 241, 241);
  border: 1px solid #393939;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 800;
  padding: 10px;
  transition: border 0.3s ease-in;
  width: 100%;
  margin-bottom: 10px;

  &:hover {
    background-color: rgb(249, 249, 249);
  }
  &:focus {
    border: solid 2px #9e70f7;
    color: #9e70f7;
    outline: none;
  }
  &:focus::placeholder {
    color: #9e70f7;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 25px;
  width: 43vh;
  border-radius: 22px;
  border: 0;
  color: white;
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};
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
