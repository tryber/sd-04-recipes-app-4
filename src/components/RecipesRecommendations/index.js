import React from 'react';
import { connect } from 'react-redux';

const RecipesRecommendations = ({ recommendations, recommendationsFetching }) => {
  if (recommendationsFetching) return null;

  return (
    <div>
      {recommendations.map((recipe) => (
        <span>{recipe.strTitle}</span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendationsReducer.recommendations,
  recommendationsFetching: state.recommendationsReducer.isFetching,
});

export default connect(mapStateToProps)(RecipesRecommendations);
