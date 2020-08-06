import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipe, fetchRecommendations } from '../../actions/detailsActions';
import { loadFromLocalStorage } from '../../service/localStorage';
import RecipesRecommendations from '../../components/RecipesRecommendations';
// import SocialMenu from '../../components/SocialMenu';

/**
 * Styled components
 */
import {
  Recipe,
  RecipeImage,
  RecipeHeader,
  RecipeTitle,
  RecipeVideo,
  RecipeStartButtom,
} from './StyledComponents';
import { setAppLocation } from '../../actions/appActions';

/**
 * Gambiarra necessária para passar nos testes =(
 * Checa se a location na url é igual a do state appLocation
 * @param {string} path               Actual Url path
 * @param {object} appLocation        appLocation State
 * @param {function} locationChanger  appLocation state set function
 */
const checkAppLocation = (path, appLocation, locationChanger) => {
  if (path.includes(appLocation)) return true;

  appLocation === 'comidas' ? locationChanger('bebidas') : locationChanger('comidas');
  return false;
};

/**
 * Render recipe button with correct text when it is necessary
 * @param {string} id Recipe id
 */
const renderRecipeButton = (id, appLocation, startRecipe) => {
  let recipesInProgress = {};
  if (appLocation === 'comidas') {
    recipesInProgress = loadFromLocalStorage('inProgressRecipes')
      ? loadFromLocalStorage('inProgressRecipes').meals
      : {};
  } else {
    recipesInProgress = loadFromLocalStorage('inProgressRecipes')
      ? loadFromLocalStorage('inProgressRecipes').cocktails
      : {};
  }
  const doneRecipes = loadFromLocalStorage('doneRecipes')
    ? loadFromLocalStorage('doneRecipes')
    : [];

  // Recipe status
  const inProgress = Object.keys(recipesInProgress).find((recipeId) => recipeId === id);
  const done = doneRecipes.find((recipe) => recipe.id === id);

  if (done) return null;

  return (
    <RecipeStartButtom type="button" data-testid="start-recipe-btn" onClick={() => startRecipe()}>
      {inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
    </RecipeStartButtom>
  );
};

/**
 * Render the recipe ingredients list
 *
 * @param {array} ingredients Array with ingredients - from redux datailsReducer.ingredients
 */
const renderIngredientsList = (ingredients) => (
  <section>
    <h2>Ingredients</h2>
    <ul>
      {ingredients.map((data, index) => (
        <li key={data.ingredient} data-testid={`${index}-ingredient-name-and-measure`}>
          {`${data.ingredient} - ${data.measure}`}
        </li>
      ))}
    </ul>
  </section>
);

/**
 * Render the recipe video
 *
 * @param {string} strYoutube A url for youtube video
 */
const renderVideo = (strYoutube) => (
  <section>
    <h2>Videos</h2>
    <RecipeVideo
      data-testid="video"
      title="ytplayer"
      type="text/html"
      src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
      frameBorder="0"
    />
  </section>
);

export const RecipeDetails = (props) => {
  const {
    match,
    history,
    recipeFetching,
    recipeFetch,
    recipe,
    recommendationsFetch,
    appLocation,
    locationChanger,
  } = props;
  const { id } = match.params; // Recipe ID
  const {
    strMealThumb,
    strDrinkThumb,
    strMeal,
    strDrink,
    strCategory,
    strAlcoholic,
    strInstructions,
    strYoutube,
    ingredients,
  } = recipe;

  /**
   * Fetch recipe and recommendations on appLocation change
   */
  useEffect(() => {
    if (checkAppLocation(match.path, appLocation, locationChanger)) {
      recipeFetch(id, appLocation);
      recommendationsFetch(appLocation);
    }
  }, [appLocation]);

  /**
   * Handle recipe start action
   */
  const startRecipe = () => {
    history.push(`/${appLocation}/${id}/in-progress`);
  };

  if (recipeFetching) return <p>loading...</p>;

  return (
    <Recipe>
      <RecipeImage
        data-testid="recipe-photo"
        src={appLocation === 'comidas' ? strMealThumb : strDrinkThumb}
      />
      <RecipeHeader>
        <RecipeTitle data-testid="recipe-title">
          {appLocation === 'comidas' ? strMeal : strDrink}
        </RecipeTitle>
        {/* <SocialMenu /> */}
      </RecipeHeader>
      <span data-testid="recipe-category">
        {appLocation === 'comidas' ? strCategory : strAlcoholic}
      </span>
      {renderIngredientsList(ingredients)}
      <h2>Instruction</h2>
      <p data-testid="instructions">{strInstructions}</p>
      {strYoutube && renderVideo(strYoutube)}
      <RecipesRecommendations />
      {renderRecipeButton(id, appLocation, startRecipe)}
    </Recipe>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.detailsReducer.recipe,
  recipeFetching: state.detailsReducer.isFetching,
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  recipeFetch: (id, type) => dispatch(fetchRecipe(id, type)),
  recommendationsFetch: (type) => dispatch(fetchRecommendations(type)),
  locationChanger: (location) => dispatch(setAppLocation(location)),
});

RecipeDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeFetching: PropTypes.bool.isRequired,
  recipeFetch: PropTypes.func.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recommendationsFetch: PropTypes.func.isRequired,
  appLocation: PropTypes.string.isRequired,
  locationChanger: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
