import React from 'react';
import { connect } from 'react-redux';

const RecipesRecommendations = ({ recommendations, recommendationsFetching, appLocation }) => {
  if (recommendationsFetching) return null;

  return (
    <div>
      <h2>Recomendadas</h2>
      {recommendations.map((recipe, index) => (
        <span data-testid={`${index}-recomendation-card`}>
          {appLocation === 'comidas' ? recipe.strDrink : recipe.strMeal}
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendationsReducer.recommendations,
  recommendationsFetching: state.recommendationsReducer.isFetching,
  appLocation: state.appReducers.location,
});

export default connect(mapStateToProps)(RecipesRecommendations);
