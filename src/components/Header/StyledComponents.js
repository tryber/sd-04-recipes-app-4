import styled, { keyframes, css } from 'styled-components';

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  padding: 15px 25px;
  position: fixed;
  min-width: 100%;
  top: 0;
  left: 0;
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
  padding: 15px 20px;
  border-radius: 22px;
  color: white;
  font-weight: 800;
  border: 0;
  background-color: #8504a6;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  animation: ${SearchButtonAnimation} 0.7s ease-out forwards;

  &:focus {
    outline: 0;
  }
`;

export const SearchType = styled.button`
  background-color: #e5e5e5;
  padding: 10px 2.5vh;
  border-radius: 20px;
  border: 0;
  margin: 10px;
  transition: all 0.3s ease-out;

  ${(props) => (props.selected
    ? css`
          outline: 0;
          background-color: #8504a6;
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
            0 2px 4px -1px rgba(0, 0, 0, 0.3);
          color: white;
        `
    : null)}

  &:focus {
    outline: 0;
  }
`;
