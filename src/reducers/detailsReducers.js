import {
  RECIPE_FETCH,
  RECIPE_FETCH_SUCCESS,
  RECIPE_FETCH_ERROR,
  RECOMMENDATIONS_FETCH,
  RECOMMENDATIONS_FETCH_SUCCESS,
  RECOMMENDATIONS_FETCH_ERROR,
} from '../actions/detailsActions';

const recipeInitialState = {
  isFetching: true,
  recipe: {},
  hasErrored: false,
};

const recommendationsInitialState = {
  isFetching: true,
  recommendations: [],
  hasErrored: false,
};

export const detailsReducer = (state = recipeInitialState, action) => {
  switch (action.type) {
    case RECIPE_FETCH:
      return { ...state, isFetching: !state.isFetching };

    case RECIPE_FETCH_SUCCESS:
      return {
        ...state,
        recipe: {
          ...action.recipe[0],
          ingredients: Object.keys(action.recipe[0]).reduce((ingredients, ingredient) => {
            if (ingredient.includes('strIngredient') && action.recipe[0][ingredient]) {
              ingredients.push({
                ingredient: action.recipe[0][ingredient],
                measure: action.recipe[0][`strMeasure${ingredient.slice(13, 15)}`],
              });
            }
            return ingredients;
          }, []),
        },
      };

    case RECIPE_FETCH_ERROR:
      return { ...state, hasErrored: true };

    default:
      return state;
  }
};

export const recommendationsReducer = (state = recommendationsInitialState, action) => {
  switch (action.type) {
    case RECOMMENDATIONS_FETCH:
      return { ...state, isFetching: !state.isFetching };

    case RECOMMENDATIONS_FETCH_SUCCESS:
      return { ...state, recommendations: [...action.recommendations] };

    case RECOMMENDATIONS_FETCH_ERROR:
      return { ...state, hasErrored: true };

    default:
      return state;
  }
};
