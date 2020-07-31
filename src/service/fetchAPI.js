const THE_MEAL_DB_API = 'https://www.themealdb.com/api/json/v1/1/';
const THE_COCKTAIL_DB_API = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const getMealByName = async (name) => {
  const fetchUrl = `${THE_MEAL_DB_API}/search.php?s=${name}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};

export const getDrinksByName = async (name) => {
  const fetchUrl = `${THE_COCKTAIL_DB_API}/search.php?s=${name}`;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data = await (response.ok ? Promise.resolve(json) : Promise.reject(json));
  return data;
};
