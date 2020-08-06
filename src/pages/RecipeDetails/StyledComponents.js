import styled from 'styled-components';

export const Recipe = styled.div`
  align-items: cneter;
  display: flex;
  flex-flow: column;
  justify-content: certe;
  padding: 15px 20px;
`;

export const RecipeImage = styled.img`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 30vh;
  width: 100%;
`;

export const RecipeHeader = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 100%;
`;

export const RecipeTitle = styled.h1`
  font-size: 2em;
  font-weight: 800;
`;

export const RecipeVideo = styled.iframe`
  border-radius: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 100%;
`;

export const RecipeStartButtom = styled.button`
  bottom: 0;
  position: fixed;
`;
