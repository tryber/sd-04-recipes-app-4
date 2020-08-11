import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIngredients, getRecipesByingredient } from '../../actions/exploreActions';
import { setDataAction } from '../../actions';
import { setAppLocation } from '../../actions/appActions';

/**
 * Gambiarra necessária para passar nos testes =(
 * Checa se a location na url é igual a do state appLocation
 * @param {string} path               Actual Url path
 * @param {object} appLocation        appLocation State
 * @param {function} locationChanger  appLocation state set function
 */
const checkAppLocation = (path, locationChanger) => {
  // if (path.includes(appLocation.toLowerCase())) return true;
  path.includes('comidas')
    ? locationChanger('Explorar Comidas')
    : locationChanger('Explorar Bebidas');
  return false;
};

/**
 * Render ingredient
 * @param {array} ingredient -
 * @param {number} index
 */
const renderMealIngredient = (ingredient, index, recipesFetcher, appLocation) => (
  <button
    type="button"
    key={ingredient.idIngredient}
    data-testid={`${index}-ingredient-card`}
    onClick={() => recipesFetcher(ingredient.strIngredient, appLocation)}
  >
    <img
      src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
      alt="foto receita"
      data-testid={`${index}-card-img`}
    />
    <span data-testid={`${index}-card-name`}>{ingredient.strIngredient}</span>
  </button>
);

const renderDrinkIngredient = (ingredient, index, recipesFetcher, appLocation) => (
  <button
    type="button"
    key={ingredient.strIngredient1}
    data-testid={`${index}-ingredient-card`}
    onClick={() => recipesFetcher(ingredient.strIngredient1, appLocation)}
  >
    <img
      src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`}
      alt="foto receita"
      data-testid={`${index}-card-img`}
    />
    <span data-testid={`${index}-card-name`}>{ingredient.strIngredient1}</span>
  </button>
);

const ExploreByIngredients = ({
  ingredientesFetcher,
  recipesFetcher,
  ingredients,
  recipes,
  isFetching,
  appLocation,
  setAppLocationProps,
  getData,
  history,
}) => {
  useEffect(() => {
    checkAppLocation(history.location.pathname, setAppLocationProps);
  }, []);

  useEffect(() => {
    if (appLocation === 'Explorar Comidas' || appLocation === 'Explorar Bebidas') {
      ingredientesFetcher(appLocation);
    }
  }, [appLocation]);

  useEffect(() => {
    if (recipes.length > 0) {
      getData(recipes);
      appLocation === 'Explorar Comidas' ? history.push('/comidas') : history.push('/bebidas');
    }
  }, [recipes]);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      {ingredients
        .slice(0, 12)
        .map((ingredient, index) =>
          appLocation === 'Explorar Comidas'
            ? renderMealIngredient(ingredient, index, recipesFetcher, appLocation)
            : renderDrinkIngredient(ingredient, index, recipesFetcher, appLocation)
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.exploreIngredientsReducer.isFetching,
  ingredients: state.exploreIngredientsReducer.ingredients,
  recipes: state.exploreIngredientsReducer.recipes,
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
  ingredientesFetcher: (type) => dispatch(getIngredients(type)),
  recipesFetcher: (id, type) => dispatch(getRecipesByingredient(id, type)),
  setAppLocationProps: (location) => dispatch(setAppLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreByIngredients);

// const recipes = data.slice(0, 12).map((recipe, index) => (
//   <Link to={`/comidas/${data[index].idMeal}`} key={recipe.idMeal}>
//     <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
//       <img src={recipe.strMealThumb} alt="foto receita" data-testid={`${index}-card-img`} />
//       <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
//     </div>
//   </Link>
// ));
