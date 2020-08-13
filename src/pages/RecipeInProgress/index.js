import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, fetchRecommendations } from '../../actions/detailsActions';
import { setAppLocation } from '../../actions/appActions';
/**
 * Styled components
 */
import {
  Recipe, RecipeImage, RecipeHeader, RecipeTitle, IngridientsProgress,
} from './StyledComponents';
import { saveToLocalStorage, loadFromLocalStorage } from '../../service/localStorage';
import SocialMenu from '../../components/SocialMenu';
import Loading from '../../components/Loading';

/**
 * Render the recipe ingredients list
 *
 * @param {array} ingredients Array with ingredients - from redux datailsReducer.ingredients
 */
const checkAppLocation = (path, appLocation, locationChanger) => {
  if (path.includes(appLocation)) return true;

  appLocation === 'bebidas' ? locationChanger('comidas') : locationChanger('bebidas');
  return false;
};

const renderAllPage = (
  appLocation,
  strMealThumb,
  strDrinkThumb,
  strMeal,
  strDrink,
  strCategory,
  strAlcoholic,
  renderIngredientsCheckList,
  ingredients,
  arrayOfChecked,
  setArrayOfChecked,
  id,
  strInstructions,
  renderFinshRecipeBtn,
  recipe,
  finishRecipe,
) => (
  <Recipe>
    <RecipeImage
      data-testid="recipe-photo"
      src={appLocation === 'comidas' ? strMealThumb : strDrinkThumb}
    />
    <SocialMenu />
    <RecipeHeader>
      <RecipeTitle data-testid="recipe-title">
        {appLocation === 'comidas' ? strMeal : strDrink}
      </RecipeTitle>
    </RecipeHeader>
    <span data-testid="recipe-category">
      {appLocation === 'comidas' ? strCategory : strAlcoholic}
    </span>
    <h2>Ingredients</h2>
    {renderIngredientsCheckList(ingredients, arrayOfChecked, setArrayOfChecked, id, appLocation)}
    <h2>Instruction</h2>
    <p data-testid="instructions">{strInstructions}</p>
    {renderFinshRecipeBtn(recipe, arrayOfChecked, finishRecipe)}
  </Recipe>
);

const renderIngredientsCheckList = (ingredients,
  arrayOfChecked, setArrayOfChecked, id, appLocation) => {
  const changeLocalStorage = (option) => {
    const progressMeals = { cocktails: {}, meals: { [id]: [...arrayOfChecked, option] } };
    const progressCocktails = { cocktails: { [id]: arrayOfChecked }, meals: {} };
    switch (appLocation) {
      case 'comidas':
        return saveToLocalStorage('inProgressRecipe', progressMeals);
      case 'bebidas':
        return saveToLocalStorage('inProgressRecipe', progressCocktails);
      default:
        break;
    }
    return null;
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
  return (
    <div>
      {ingredients.map((data, index) => (
        <label htmlFor={data.ingredient} data-testid={`${index}-ingredient-step`} key={data.ingredient}>
          <input
            name={data.ingredient}
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

const setLocalStorageFoodDone = (recipe, currentDoneRecipes) => {
  const objForDone = {
    id: recipe.idMeal,
    type: 'comida',
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    doneDate: recipe.dateModified,
    tags: recipe.strTags.split(','),
  };
  const doneRecipes = [...currentDoneRecipes, objForDone];
  return localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};

const setLocalStorageDrinkDone = (recipe, currentDoneRecipes) => {
  const objForDone = {
    id: recipe.idDrink,
    type: 'bebida',
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    doneDate: recipe.dateModified,
    tags: recipe.strTags ? recipe.strTags.split(',') : [],
  };
  const doneRecipes = [...currentDoneRecipes, objForDone];
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};

const renderFinshRecipeBtn = (recipe, arrayOfChecked, finishRecipe) => {
  const { ingredients } = recipe;
  return (
    <button
      type="button"
      data-testid="finish-recipe-btn"
      disabled={arrayOfChecked.length !== ingredients.length}
      onClick={() => finishRecipe()}
    >
      Finalizar Receita
    </button>
  );
};

const firstIf = (appLocation, arrayOfChecked, setArrayOfChecked, id) => {
  if (appLocation === 'comidas' && arrayOfChecked.length > 0) {
    setArrayOfChecked(loadFromLocalStorage('inProgressRecipe').meals[id]);
  }
};

const secoundIf = (setArrayOfChecked, id) => {
  setArrayOfChecked(loadFromLocalStorage('inProgressRecipe').cocktails[id]);
};

const insideSecoundIf = (appLocation, arrayOfChecked) => {
  if (appLocation === 'bebidas' && arrayOfChecked.length > 0) {
    return true;
  }
  return false;
};

const doUseEffect = (
  appLocation, arrayOfChecked, setArrayOfChecked, id, match,
  locationChanger, recipeFetch, recommendationsFetch,
) => {
  if (loadFromLocalStorage('inProgressRecipe')) {
    firstIf();
    if (insideSecoundIf(appLocation, arrayOfChecked)) {
      secoundIf(setArrayOfChecked, id);
    }
  }
  if (checkAppLocation(match.path, appLocation, locationChanger)) {
    recipeFetch(id, appLocation);
    recommendationsFetch(appLocation);
  }
};

const ifsFinishReceipes = (appLocation, recipe, currentDoneRecipes) => {
  if (appLocation === 'comidas') setLocalStorageFoodDone(recipe, currentDoneRecipes);
  if (appLocation === 'bebidas') setLocalStorageDrinkDone(recipe, currentDoneRecipes);
};

export const RecipeDetailsInProgress = (props) => {
  const {
    match, history, recipe, recipeFetching, recipeFetch, recommendationsFetch,
    appLocation, locationChanger,
  } = props;
  const { id } = match.params; // Recipe ID
  const {
    strMealThumb,
    strMeal, strInstructions, ingredients, strAlcoholic, strDrink, strDrinkThumb, strCategory,
  } = recipe;
  const [arrayOfChecked, setArrayOfChecked] = useState([]);
  // Fetch recipe and recommendations on mount
  useEffect(() => {
    doUseEffect(
      appLocation, arrayOfChecked, setArrayOfChecked, id, match,
      locationChanger, recipeFetch, recommendationsFetch,
    );
  }, [appLocation]);
  // Handle recipe start action
  const finishRecipe = () => {
    const currentDoneRecipes = localStorage.getItem('doneRecipes')
      ? JSON.parse(localStorage.getItem('doneRecipes')) : [];
    ifsFinishReceipes(appLocation, recipe, currentDoneRecipes);
    history.push('/receitas-feitas');
  };
  if (recipeFetching) return <Loading />;
  return (
    renderAllPage(
      appLocation, strMealThumb, strDrinkThumb, strMeal, strDrink, strCategory, strAlcoholic,
      renderIngredientsCheckList, ingredients, arrayOfChecked, setArrayOfChecked, id,
      strInstructions, renderFinshRecipeBtn, recipe, finishRecipe,
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailsInProgress);

RecipeDetailsInProgress.propTypes = {
  appLocation: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  locationChanger: PropTypes.func.isRequired,
  match: PropTypes.objectOf({
    params: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeFetch: PropTypes.func.isRequired,
  recipeFetching: PropTypes.bool.isRequired,
  recommendationsFetch: PropTypes.func.isRequired,
};
