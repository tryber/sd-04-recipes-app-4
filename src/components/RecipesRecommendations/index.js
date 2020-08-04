import React from 'react';
import { connect } from 'react-redux';

const RecipesRecommendations = ({ recommendations, recommendationsFetching }) => {
  if (recommendationsFetching) return null;

  return (
    <div>
      <h2>Recomendadas</h2>
      {recommendations.map((recipe) => (
        <span>{recipe.strMeal}</span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendationsReducer.recommendations,
  recommendationsFetching: state.recommendationsReducer.isFetching,
});

export default connect(mapStateToProps)(RecipesRecommendations);
