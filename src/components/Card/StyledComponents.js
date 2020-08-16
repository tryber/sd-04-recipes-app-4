import styled, { keyframes } from 'styled-components';
import { zdepth1, zdepth3, fadeInAnim } from '../../Assets/Style';

export const CardClickAnimation = keyframes`
  from {
    transform: scale(1);
    ${zdepth1}
  }

  to {
    transform: scale(1.1);
    ${zdepth3}
  }
`;

export const CardDisplayAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CardContainer = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  border: 0;
  padding-bottom: 15px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  ${zdepth1};
  width: 47%;
  overflow: hidden;
  ${fadeInAnim};

  &:focus {
    outline: 0;
    animation: ${CardClickAnimation} ease-out 0.3s forwards;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
