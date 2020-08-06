import { getMealById, getDrinkById, getMealsByName, getDrinksByName } from '../service/fetchAPI';

export const RECIPE_FETCH = 'RECIPE_FETCH';
export const RECIPE_FETCH_SUCCESS = 'RECIPE_FETCH_SUCESS';
export const RECIPE_FETCH_ERROR = 'RECIPE_FETCH_ERROR';
export const RECOMMENDATIONS_FETCH = 'RECOMMENDATIONS_FETCH';
export const RECOMMENDATIONS_FETCH_SUCCESS = 'RECOMMENDATIONS_FETCH_SUCCESS';
export const RECOMMENDATIONS_FETCH_ERROR = 'RECOMMENDATIONS_FETCH_ERROR';

/**
 * Recipe fetch actions
 */

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
 * Request one RECIPE from de the meals or cockctails API
 *
 * @param {integer} id    Recipe id to use on the API request
 * @param {string} type   Recipe type to use on API request
 *
 */
export const fetchRecipe = (id, type) => (dispatch) => {
  const fetcher = type === 'comidas' ? getMealById : getDrinkById;

  fetcher(id)
    .then((recipe) => {
      if (type === 'comidas') {
        dispatch(recipeFetchSuccess(recipe.meals));
      } else {
        dispatch(recipeFetchSuccess(recipe.drinks));
      }
    })
    .then(() => dispatch(recipeFetch()))
    .catch((error) => dispatch(recipeFetchErrored(error)));
};

/**
 * Recommendations fetch actions
 */

const recommendationsFetch = () => ({
  type: RECOMMENDATIONS_FETCH,
});

const recommendationsFetchSuccess = (recommendations) => ({
  type: RECOMMENDATIONS_FETCH_SUCCESS,
  recommendations,
});

const recommendationsFetchErrored = (error) => ({
  type: RECOMMENDATIONS_FETCH_ERROR,
  error,
});

/**
 * Request RECOMMENDATIONS recipes from de the meals or cockctails API
 *
 * @param {string} type   Recipe type to use on API request
 *
 */
export const fetchRecommendations = (type) => (dispatch) => {
  const fetcher = type === 'comidas' ? getDrinksByName : getMealsByName;

  fetcher('')
    .then((recipes) => {
      if (type === 'comidas') {
        dispatch(recommendationsFetchSuccess(recipes.drinks.slice(0, 6)));
      } else {
        dispatch(recommendationsFetchSuccess(recipes.meals.slice(0, 6)));
      }
    })
    .then(() => dispatch(recommendationsFetch()))
    .catch((error) => dispatch(recommendationsFetchErrored(error)));
};
