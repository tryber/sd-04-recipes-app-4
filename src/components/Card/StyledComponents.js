import styled from 'styled-components';
import { zdepth1 } from '../../Assets/Style';

export const CardContainer = styled.button`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  padding: 0;
  border: 0;
  padding-bottom: 15px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  ${zdepth1};
`;

export const CardImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
