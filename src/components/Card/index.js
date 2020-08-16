import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

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

const Card = ({ type, data, index }) => {
  const { push } = useHistory();

  return (
    <CardContainer
      key={data[inf[type].id]}
      data-testid={`${index}${inf[type].testId}`}
      onClick={() => {
        setTimeout(() => {
          push(`${inf[type].path}/${data[inf[type].id]}`);
        }, 300);
      }}
    >
      <CardImage src={data[inf[type].image]} />
      <span>{data[inf[type].desc]}</span>
    </CardContainer>
  );
};

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;
