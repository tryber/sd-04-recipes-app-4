import React from 'react';

/** Styled Components */
import { CardContainer, CardImage } from './StyledComponents';

const inf = {
  meal: {
    id: 'idMeal',
    image: 'strMealThumb',
    desc: 'strMeal',
    testId: '-recipe-card',
    path: '/comidas',
  },
  drink: {
    id: 'idDrink',
    image: 'strDrinkThumb',
    desc: 'strDrink',
    testId: '-recipe-card',
    path: '/bebidas',
  },
};

const Card = ({ type, data = [], index }) => {
  return (
    <CardContainer key={data[inf[type].id]} data-testid={`${index}${inf[type].testId}`}>
      <CardImage src={data[inf[type].image]} />
      <span>{data[inf[type].desc]}</span>
    </CardContainer>
  );
};

export default Card;
