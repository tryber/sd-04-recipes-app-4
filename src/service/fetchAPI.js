const THE_MEAL_DB_API = 'https://www.themealdb.com/api/json/v1/1/';
const THE_COCKTAIL_DB_API = 'https://www.thecocktaildb.com/api/json/v1/1/';
//  separados por semelhança
//  get by name
export const getMealsByName = async (name) => {
  const fetchUrl = `${THE_MEAL_DB_API}search.php?s=${name}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksByName = async (name) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}search.php?s=${name}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  listar categorias

export const getMealsCategories = async () => {
  const fetchUrl = `${THE_MEAL_DB_API}list.php?c=list`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksCategories = async () => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}list.php?c=list`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  filtar por categorias

export const getMealsByCategory = async (category) => {
  const fetchUrl = `${THE_MEAL_DB_API}filter.php?c=${category}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksByCategory = async (category) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}filter.php?c=${category}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  filtro por primeira letra

export const getMealsByFirstLetter = async (letter) => {
  const fetchUrl = `${THE_MEAL_DB_API}search.php?f=${letter}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksByFirstLetter = async (letter) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}search.php?f=${letter}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  get Random

export const getRandomMeals = async () => {
  const fetchUrl = `${THE_MEAL_DB_API}random.php`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getRandomDrinks = async () => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}random.php`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  get by ids

export const getMealById = async (id) => {
  const fetchUrl = `${THE_MEAL_DB_API}lookup.php?i=${id}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinkById = async (id) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}lookup.php?i=${id}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  get by ingredients

export const getMealsByIngredient = async (ingredient) => {
  const fetchUrl = `${THE_MEAL_DB_API}filter.php?i=${ingredient}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksByIngredient = async (ingredient) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}filter.php?i=${ingredient}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  get ingredients by id

export const getIngredientMealById = async (id) => {
  const fetchUrl = `${THE_MEAL_DB_API}lookup.php?i=${id}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getIngredientDrinkById = async (id) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}lookup.php?i=${id}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

//  get meal by area

export const getMealsByArea = async (area) => {
  const fetchUrl = `${THE_MEAL_DB_API}filter.php?a=${area}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};
