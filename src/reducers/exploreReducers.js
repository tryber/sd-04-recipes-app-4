import {
  RANDOM_RECIPE,
  RANDOM_RECIPE_FETCHING,
  RANDOM_RECIPE_ERROR,
  INGREDIENTS,
  INGREDIENTS_FETCHING,
  INGREDIENTS_ERROR,
  AREAS,
  AREAS_FETCHING,
  AREAS_ERROR,
  RECIPES_BY_INGREDIENT,
  RECIPES_BY_INGREDIENT_FETCHING,
  RECIPES_BY_INGREDIENT_ERROR,
  RECIPES_BY_AREA,
  RECIPES_BY_AREA_FETCHING,
  RECIPES_BY_AREA_ERROR,
} from '../actions/exploreActions';

/**
 * Random recipe
 */
const randomInitialState = {
  isFetching: true,
  recipe: [],
  error: {
    status: true,
    msg: '',
  },
};

export const randomRecipeReducer = (state = randomInitialState, action) => {
  switch (action.type) {
    case RANDOM_RECIPE_FETCHING:
      return { ...state, isFetching: action.bool };

    case RANDOM_RECIPE:
      return { ...state, recipe: [...action.recipe] };

    case RANDOM_RECIPE_ERROR:
      return { ...state, error: { ...state.error, status: true, msg: action.error } };

    default:
      return state;
  }
};

/**
 * Ingredients and recipe by ingredients
 */

const ingredientsInitialState = {
  isFetching: true,
  ingredients: [],
  recipes: [],
  error: {
    status: true,
    msg: '',
  },
};

export const exploreIngredientsReducer = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case INGREDIENTS_FETCHING:
      return { ...state, isFetching: action.bool };

    case INGREDIENTS:
      return { ...state, ingredients: [...action.ing] };

    case INGREDIENTS_ERROR:
      return { ...state, error: { ...state.error, status: true, msg: action.error } };

    case RECIPES_BY_INGREDIENT_FETCHING:
      return { ...state, isFetching: action.bool };

    case RECIPES_BY_INGREDIENT:
      return { ...state, recipes: [...action.recipes] };

    case RECIPES_BY_INGREDIENT_ERROR:
      return { ...state, error: { ...state.error, status: true, msg: action.error } };

    default:
      return state;
  }
};

/**
 * Areas and recipe by area
 */
const byAreaInitialState = {
  isFetching: true,
  areas: [],
  recipes: [],
  error: {
    status: true,
    msg: '',
  },
};

export const exploreRecipesByArea = (state = byAreaInitialState, action) => {
  switch (action.type) {
    case AREAS_FETCHING:
      return { ...state, isFetching: action.bool };

    case AREAS:
      return { ...state, areas: [...action.area] };

    case AREAS_ERROR:
      return { ...state, error: { ...state.error, status: true, msg: action.error } };

    case RECIPES_BY_AREA_FETCHING:
      return { ...state, isFetching: action.bool };

    case RECIPES_BY_AREA:
      return { ...state, recipes: [...action.recipe] };

    case RECIPES_BY_AREA_ERROR:
      return { ...state, error: { ...state.error, status: true, msg: action.error } };

    default:
      return state;
  }
};
