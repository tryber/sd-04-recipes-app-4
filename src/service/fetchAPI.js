const THE_MEAL_DB_API = 'https://www.themealdb.com/api/json/v1/1/';
const THE_COCKTAIL_DB_API = 'https://www.thecocktaildb.com/api/json/v1/1/';
https://www.themealdb.com/api/json/v1/1/search.php?s=
export function getMealByName(Name) {
  return fetch(`${THE_MEAL_DB_API}/search.php?s=${name}`).then((response) => response.json());
}
