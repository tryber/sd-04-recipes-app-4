import styled from 'styled-components';

export const Recipe = styled.div`
<<<<<<< HEAD
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
=======
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
>>>>>>> 15177bf170682a1124940c79186697d5169dadd9
`;
