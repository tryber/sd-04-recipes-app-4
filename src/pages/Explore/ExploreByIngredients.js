import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIngredients, getRecipesByingredient } from '../../actions/exploreActions';
import { setDataAction } from '../../actions';
import { setAppLocation } from '../../actions/appActions';
import Loading from '../../components/Loading';
import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header/Header';

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
    ? locationChanger('explorar/comidas/ingredientes')
    : locationChanger('explorar/bebidas/ingredientes');
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
    if (appLocation === 'explorar/comidas/ingredientes' || appLocation === 'explorar/bebidas/ingredientes') {
      ingredientesFetcher(appLocation);
    }
  }, [appLocation]);

  useEffect(() => {
    if (recipes.length > 0) {
      getData(recipes);
      appLocation === 'explorar/comidas/ingredientes' ? history.push('/comidas') : history.push('/bebidas');
    }
  }, [recipes]);

  if (isFetching) return <Loading />;

  return (
    <div>
      <Header />
      {ingredients
        .slice(0, 12)
        .map((ingredient, index) => (appLocation === 'explorar/comidas/ingredientes'
          ? renderMealIngredient(ingredient, index, recipesFetcher, appLocation)
          : renderDrinkIngredient(ingredient, index, recipesFetcher, appLocation)))}
      <BottomMenu />
    </div>
  );
};

ExploreByIngredients.propTypes = {
  appLocation: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  ingredientesFetcher: PropTypes.func.isRequired,
  ingredients: PropTypes.shape({
    slice: PropTypes.func.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  recipesFetcher: PropTypes.func.isRequired,
  setAppLocationProps: PropTypes.func.isRequired,
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
