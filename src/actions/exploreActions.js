import {
  getRandomMeals,
  getRandomDrinks,
  getMealsAreas,
  getMealsByArea,
  getMealsByIngredient,
  getDrinksByIngredient,
  getMealsIngredients,
  getDrinksIngredients,
  getMealsByName,
} from '../service/fetchAPI';

export const RANDOM_RECIPE = 'RANDOM_RECIPE';
export const RANDOM_RECIPE_FETCHING = 'RANDOM_RECIPE_FETCHING';
export const RANDOM_RECIPE_ERROR = 'RANDOM_RECIPE_ERROR';

export const INGREDIENTS = 'INGREDIENTS';
export const INGREDIENTS_FETCHING = 'INGREDIENT_FETCHINGS';
export const INGREDIENTS_ERROR = 'INGREDIENT_ERRORS';

export const AREAS = 'AREAS';
export const AREAS_FETCHING = 'AREAS_RECIPE';
export const AREAS_ERROR = 'AREAS_RECIPE';

export const RECIPES_BY_INGREDIENT = 'RECIPES_BY_INGREDIENT';
export const RECIPES_BY_INGREDIENT_FETCHING = 'RECIPES_BY_INGREDIENT_FETCHING';
export const RECIPES_BY_INGREDIENT_ERROR = 'RECIPES_BY_INGREDIENT_ERROR';

export const RECIPES_BY_AREA = 'RECIPES_BY_AREA';
export const RECIPES_BY_AREA_FETCHING = 'RECIPES_BY_AREA_FETCHING';
export const RECIPES_BY_AREA_ERROR = 'RECIPES_BY_AREA_ERROR';

/**
 *  Random recipes actions
 */
const RandomRecipeAction = (recipe) => ({
  type: RANDOM_RECIPE,
  recipe,
});

const radomRecipeFetching = (bool) => ({
  type: RANDOM_RECIPE_FETCHING,
  bool,
});

const randomRecipeErrored = (error) => ({
  type: RANDOM_RECIPE_ERROR,
  error,
});

/**
 * Random recipes fetch function
 * @param {string} type recipe type
 */
export const getRandomRecipe = (type) => (dispatch) => {
  console.log(type);
  const fetcher = type === 'comidas' ? getRandomMeals : getRandomDrinks;
  dispatch(radomRecipeFetching(true));
  fetcher()
    .then((recipe) => {
      const data = type === 'comidas' ? recipe.meals : recipe.drinks;
      dispatch(RandomRecipeAction(data));
    })
    .then(() => dispatch(radomRecipeFetching(false)))
    .catch((error) => dispatch(randomRecipeErrored(error)));
};

/**
 * Ingredientes actions
 */
const ingredients = (ing) => ({
  type: INGREDIENTS,
  ing,
});

const ingredientsFetching = (bool) => ({
  type: INGREDIENTS_FETCHING,
  bool,
});

// const ingredientsErrored = (error) => ({
//   type: INGREDIENTS_ERROR,
//   error,
// });

/**
 * Ingredients fetch function
 * @param {string} type recipe type
 */
export const getIngredients = (type) => (dispatch) => {
  const fetcher = type === 'Explorar Comidas' ? getMealsIngredients : getDrinksIngredients;

  dispatch(ingredientsFetching(true));
  fetcher()
    .then((ingre) => {
      const data = type === 'Explorar Comidas' ? ingre.meals : ingre.drinks;
      dispatch(ingredients(data));
    })
    .then(() => dispatch(ingredientsFetching(false)));
  // .catch((error) => dispatch(ingredientsErrored(error)));
};

/**
 * Recipes by ingredientes actions
 */
const recipesByIngredient = (recipes) => ({
  type: RECIPES_BY_INGREDIENT,
  recipes,
});

const recipesByIngredientFetching = (bool) => ({
  type: RECIPES_BY_INGREDIENT_FETCHING,
  bool,
});

// const recipesByIngredientErrored = (error) => ({
//   type: RECIPES_BY_INGREDIENT_ERROR,
//   error,
// });

/**
 * Recipes by ingredients
 * @param {string} type recipe type
 */
export const getRecipesByingredient = (id, type) => (dispatch) => {
  const fetcher = type === 'Explorar Comidas' ? getMealsByIngredient : getDrinksByIngredient;

  dispatch(recipesByIngredientFetching(true));
  fetcher(id)
    .then((result) => {
      const data = type === 'Explorar Comidas' ? result.meals : result.drinks;
      dispatch(recipesByIngredient(data));
    })
    .then(() => dispatch(recipesByIngredientFetching(false)));
  // .catch((error) => dispatch(recipesByIngredientErrored(error)));
};

/**
 * Area actions
 */
const areas = (area) => ({
  type: AREAS,
  area,
});

const areasFetching = (bool) => ({
  type: AREAS_FETCHING,
  bool,
});

// const areasError = (error) => ({
//   type: AREAS_ERROR,
//   error,
// });

/**
 * Areas fetch function
 * @param {string} type areas
 */
export const getAreaRecipe = () => (dispatch) => {
  dispatch(areasFetching(true));
  getMealsAreas()
    .then((recipe) => {
      dispatch(areas(recipe.meals));
    })
    .then(() => dispatch(areasFetching(false)));
  // .catch((error) => dispatch(areasError(error)));
};

/**
 * Recipes by area actions
 */
const recipesByArea = (recipe) => ({
  type: RECIPES_BY_AREA,
  recipe,
});

const recipesByAreaFetching = (bool) => ({
  type: RECIPES_BY_AREA_FETCHING,
  bool,
});

// const RecipesByAreaError = (error) => ({
//   type: RECIPES_BY_AREA_ERROR,
//   error,
// });

/**
 * Recipes by area fetch function
 * @param {string} type recipe by area
 */
export const getRecipesByArea = (area) => (dispatch) => {
  const fetcher = area === 'All' ? getMealsByName : getMealsByArea;
  dispatch(areasFetching(true));
  fetcher(area)
    .then((recipe) => {
      dispatch(recipesByArea(recipe.meals));
    })
    .then(() => dispatch(recipesByAreaFetching(false)));
  // .catch((error) => dispatch(RecipesByAreaError(error)));
};
