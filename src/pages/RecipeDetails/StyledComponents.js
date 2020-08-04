import styled from 'styled-components';

export const Recipe = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: certe;
  align-items: cneter;
  flex-flow: column;
`;

export const RecipeImage = styled.div`
  height: 30vh;
  background-image: url(${(props) => props.imageSrc});
  border-radius: 10px;
  width: 100%;
  background-position-x: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;

export const RecipeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
`;

export const RecipeTitle = styled.h1`
  font-weight: 800;
  font-size: 2em;
`;

export const RecipeVideo = styled.iframe`
  width: 100%
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;
