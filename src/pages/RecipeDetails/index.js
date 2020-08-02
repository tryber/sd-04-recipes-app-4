import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions/detailsActions';

export const RecipeDetails = ({ match, recipeFetching, recipeFetch, recipe, appLocation }) => {
  const { id } = match.params;

  useEffect(() => {
    recipeFetch(id, appLocation);
  }, [id]);

  if (recipeFetching) return <p>loading...</p>;

  return <div>{recipe.strMeal}</div>;
};

const mapStateToProps = (state) => ({
  recipe: state.detailsReducer.recipe,
  recipeFetching: state.detailsReducer.isFetching,
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  recipeFetch: (id, type) => dispatch(fetchRecipe(id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
