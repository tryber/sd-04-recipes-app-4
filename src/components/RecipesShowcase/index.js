import React from 'react';
import { useHistory } from 'react-router-dom';

/** Styled components */
import { SectionTitle } from '../../Assets/Style';
import { Showcase, RecipeCase, RecipeCaseTitle } from './StyledComponents';

const inf = {
  meal: {
    id: 'idMeal',
    image: 'strMealThumb',
    desc: 'strMeal',
    path: '/comidas',
  },
  drink: {
    id: 'idDrink',
    image: 'strDrinkThumb',
    desc: 'strDrink',
    path: '/bebidas',
  },
};

const RecipesShowcase = ({ type, data }) => {
  const { push } = useHistory();

  return (
    <div>
      <SectionTitle>Destaques</SectionTitle>
      <Showcase>
        {data.slice(-5).map((recipe) => (
          <RecipeCase
            image={recipe[inf[type].image]}
            onClick={() => push(`${inf[type].path}/${recipe[inf[type].id]}`)}
          >
            <RecipeCaseTitle>{recipe[inf[type].desc]}</RecipeCaseTitle>
          </RecipeCase>
        ))}
      </Showcase>
    </div>
  );
};

export default RecipesShowcase;
