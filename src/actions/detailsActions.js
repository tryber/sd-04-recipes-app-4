import { getMealById, getDrinkById } from '../service/fetchAPI';

export const RECIPE_FETCH = 'RECIPE_FETCH';
export const RECIPE_FETCH_SUCCESS = 'RECIPE_FETCH_SUCESS';
export const RECIPE_FETCH_ERROR = 'RECIPE_FETCH_ERROR';

const recipeFetch = () => ({
  type: RECIPE_FETCH,
});

const recipeFetchSuccess = (recipe) => ({
  type: RECIPE_FETCH_SUCCESS,
  recipe,
});

const recipeFetchErrored = (error) => ({
  type: RECIPE_FETCH_ERROR,
  error,
});

/**
 * Request one recipe from de the meals or cockctails API
 *
 * @param {integer} id    Recipe id to use on the API request
 * @param {string} type   Recipe type to use on API request
 *
 */
export const fetchRecipe = (id, type) => (dispatch) => {
  dispatch(recipeFetch());

  const fetcher = type === 'comidas' ? getMealById : getDrinkById;

  fetcher(id)
    .then((recipe) => dispatch(recipeFetchSuccess(recipe.meals)))
    .then(() => dispatch(recipeFetch()))
    .catch((error) => dispatch(recipeFetchErrored(error)));
};
