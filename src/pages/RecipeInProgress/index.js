import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, fetchRecommendations } from '../../actions/detailsActions';
import SocialMenu from '../../components/SocialMenu';
import { setAppLocation } from '../../actions/appActions';
/**
 * Styled components
 */
import {
  Recipe, RecipeImage, RecipeHeader, RecipeTitle, IngridientsProgress,
} from './StyledComponents';
import { saveToLocalStorage, loadFromLocalStorage } from '../../service/localStorage';

/**
 * Render the recipe ingredients list
 *
 * @param {array} ingredients Array with ingredients - from redux datailsReducer.ingredients
 */
const checkAppLocation = (path, appLocation, locationChanger) => {
  if (path.includes(appLocation)) return true;

  appLocation === 'comidas' ? locationChanger('bebidas') : locationChanger('comidas');
  return false;
};

const renderIngredientsCheckList = (ingredients, arrayOfChecked, setArrayOfChecked, id, appLocation) => {
  const changeLocalStorage = (option) => {
    const progressMeals = { cocktails: {}, meals: { [id]: [...arrayOfChecked, option] } };
    const progressCocktails = { cocktails: { [id]: arrayOfChecked }, meals: {} };
    console.log(appLocation);
    switch (appLocation) {
      case 'comidas':
        return saveToLocalStorage('inProgressRecipe', progressMeals);
      case 'bebidas':
        return saveToLocalStorage('inProgressRecipe', progressCocktails);
      default:
        break;
    }
    /*     if (appLocation === 'comidas') {
      const progress = { cocktails: {}, meals: { [id]: [...arrayOfChecked, option] } };
      saveToLocalStorage('inProgressRecipe', progress);
    }
    if (appLocation === 'bebidas') {
      const progress = { cocktails: { [id]: arrayOfChecked }, meals: {} };
      saveToLocalStorage('inProgressRecipe', progress);
    } */
  };
  const toggleCheckbox = (option) => {
    if (arrayOfChecked.indexOf(option) === -1) {
      changeLocalStorage(option);
      setArrayOfChecked(
        [...arrayOfChecked, option],
      );
    } else {
      setArrayOfChecked(
        arrayOfChecked.filter((text) => text !== option),
      );
    }
  };
  // const enableButton = () => (arrayOfChecked.length === ingredients.length);
  return (
    <div>
      {ingredients.map((data, index) => (
        <label htmlFor={data.ingredient} data-testid={`${index}-ingredient-step`}>
          <input
            name={data.ingredient}
            key={data.ingredient}
            type="checkbox"
            defaultChecked={(event) => (arrayOfChecked.indexOf(event.target.name) !== -1)}
            onChange={(event) => toggleCheckbox(event.target.name)}
          />
          <IngridientsProgress isChecked={arrayOfChecked.find((e) => e === data.ingredient)}>
            {data.ingredient}
            {data.measure}
          </IngridientsProgress>
          <br />
        </label>
      ))}
    </div>
  );
};

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
    strMealThumb, strMeal, strCategory, strInstructions, ingredients, strAlcoholic, strDrink, strDrinkThumb,
  } = recipe;
  const [arrayOfChecked, setArrayOfChecked] = useState([]);

  /**
   * Fetch recipe and recommendations on mount
   */
  useEffect(() => {
    if (loadFromLocalStorage('inProgressRecipe')) {
      if (appLocation === 'comidas' && arrayOfChecked.length > 0) setArrayOfChecked(loadFromLocalStorage('inProgressRecipe').meals[id]);
      if (appLocation === 'bebidas' && arrayOfChecked.length > 0) setArrayOfChecked(loadFromLocalStorage('inProgressRecipe').cocktails[id]);
    }
    if (checkAppLocation(match.path, appLocation, locationChanger)) {
      recipeFetch(id, appLocation);
      recommendationsFetch(appLocation);
    }
  }, [appLocation]);
  /**
   * Handle recipe start action
   */
  const finishRecipe = () => {
    history.push(`/comidas/${id}/receitas-feitas`);
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
        <SocialMenu />
      </RecipeHeader>
      <span data-testid="recipe-category">
        {appLocation === 'comidas' ? strCategory : strAlcoholic}
      </span>
      <h2>Ingredients</h2>
      {renderIngredientsCheckList(ingredients, arrayOfChecked, setArrayOfChecked, id, appLocation)}
      <h2>Instruction</h2>
      <p data-testid="instructions">{strInstructions}</p>
      <button type="button" data-testid="finish-recipe-btn" disabled={arrayOfChecked.length !== ingredients.length} onClick={() => finishRecipe()}>
        Finalizar Receita
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);

RecipeDetails.propTypes = {
  appLocation: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  locationChanger: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeFetch: PropTypes.func.isRequired,
  recipeFetching: PropTypes.func.isRequired,
  recommendationsFetch: PropTypes.func.isRequired,
};
