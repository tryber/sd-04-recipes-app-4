import styled, { keyframes, css } from 'styled-components';
import { zdepth1, zdepth2 } from '../../Assets/Style';

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  padding: 0 25px;
  position: fixed;
  min-width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const HeaderTitle = styled.h1`
  margin: 0 auto;
`;

const SearchContainerAnim = keyframes`
  from {
    height: 0vh;
  }

  to {
    height: 20vh;
  }
`;

export const SearchContainer = styled.div`
  animation: ${SearchContainerAnim} 0.2s ease-out forwards;
`;

const SearchBarAnimation = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const SearchBar = styled.input`
  background-color: white;
  border: 1px solid #d8d8d8;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 800;
  padding: 10px 20px;
  transition: all 0.3s ease-in;
  width: 58%;
  margin: 10px;
  color: #8504a6;
  flex: 1;
  animation: ${SearchBarAnimation} 0.2s ease-out forwards;

  &:hover {
    background-color: rgb(249, 249, 249);
  }
  &:focus {
    background-color: #8504a6;
    border: 1px solid #8504a6;
    color: white;
    outline: none;
  }
  &:focus::placeholder {
    color: #9e70f7;
  }
`;

const SearchButtonAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 22px;
  color: white;
  font-weight: 800;
  border: 0;
  background-color: #8504a6;
  ${zdepth1}
  animation: ${SearchButtonAnimation} 0.7s ease-out forwards;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  &:focus {
    outline: 0;
  }
  
  &:active {
    ${zdepth2}
    transform: scale(1.1);
  }
`;

export const SearchSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const SearchType = styled.button`
  background-color: #e5e5e5;
  flex: 1;
  padding: 10px 0;
  border-radius: 20px;
  border: 0;
  margin: 10px;
  ${zdepth1}
  transition: all 0.3s ease-out;

  ${(props) => (props.selected
    ? css`
          outline: 0;
          background-color: #8504a6;
          color: white;
          ${zdepth2}
          transform: scale(1.05);
        `
    : null)}

  &:focus {
    outline: 0;
  }
`;
