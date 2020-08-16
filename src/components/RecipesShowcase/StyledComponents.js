import styled from 'styled-components';
import { zdepth2 } from '../../Assets/Style';

export const Showcase = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  overflow: scroll;
  scrollbar-color: none;
  padding: 15px 20px;
`;

export const RecipeCase = styled.div`
  min-width: 78%;
  height: 150px;
  margin-right: 15px;
  background-image: url(${(props) => props.image});
  ${zdepth2};
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  background-repeat: no-repeat;
  display: flex;
  padding: 10px 25px;
`;

export const RecipeCaseTitle = styled.span`
  color: white;
  font-weight: 800;
  font-size: 1.6em;
  align-self: flex-end;
`;
