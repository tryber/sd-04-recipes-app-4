import React from 'react';

/** Styled components */
import { SectionTitle } from '../../Assets/Style';
import { Showcase, RecipeCase, RecipeCaseTitle } from './StyledComponents';

const inf = {
  meal: { image: 'strMealThumb', title: 'strMeal' },
  drink: { image: 'strDrinkThumb', title: 'strDrink' },
};

const RecipesShowcase = ({ type, data }) => {
  return (
    <div>
      <SectionTitle>Destaques</SectionTitle>
      <Showcase>
        {data.slice(-5).map((recipe) => (
          <RecipeCase image={recipe[inf[type].image]}>
            <RecipeCaseTitle>{recipe[inf[type].title]}</RecipeCaseTitle>
          </RecipeCase>
        ))}
      </Showcase>
    </div>
  );
};

export default RecipesShowcase;
