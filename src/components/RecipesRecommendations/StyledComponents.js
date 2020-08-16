import styled from 'styled-components';
import { zdepth2 } from '../../Assets/Style';

export const Carroussel = styled.div`
  display: flex;
  height: 130px;
  overflow: hidden;
  position: relative;
  transition: all 2s linear;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: felx;
  flex-flow: row;
  left: ${(props) => props.position};
  position: absolute;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  ${zdepth2}
  height: 120px;
  margin-left: 5px;
  margin-right: 20px;
  min-width: 140px;
  transition: all 2s linear;
`;
