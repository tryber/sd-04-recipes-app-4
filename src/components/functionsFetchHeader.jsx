import {
  getMealsByName,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getDrinksByName,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
} from '../service/fetchAPI';

const alertNoFound = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const fetchByNameValue = (nameSearch, setData, setIsFetching) => {
  getMealsByName(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

export const fetchByFirstLetterValue = (nameSearch, setData, setIsFetching) => {
  getMealsByFirstLetter(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

export const fetchByIngredientsValue = (nameSearch, setData, setIsFetching) => {
  getMealsByIngredient(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

export const getFetchFoods = (nameSearch, params, setData, setIsFetching) => {
  if (params === 'firstLetter' && nameSearch.length > 1) {
    return alert('Sua busca deve conter somente 1 (um) caracter');
  }
  setIsFetching(true);
  if (params === 'name') {
    fetchByNameValue(nameSearch, setData, setIsFetching);
  }
  if (params === 'firstLetter') {
    fetchByFirstLetterValue(nameSearch, setData, setIsFetching);
  }
  if (params === 'ingredients') {
    fetchByIngredientsValue(nameSearch, setData, setIsFetching);
  }
  return setIsFetching(false);
};

export const fetchByNameValueDrink = (nameSearch, setData, setIsFetching) => {
  getDrinksByName(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    setData(Drinks.drinks);
    return setIsFetching(false);
  });
};

export const fetchByFirstLetterValueDrinks = (nameSearch, setData, setIsFetching) => {
  getDrinksByFirstLetter(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    setData(Drinks.drinks);
    return setIsFetching(false);
  });
};

export const fetchByIngredientsValueDrinks = (nameSearch, setData, setIsFetching) => {
  getDrinksByIngredient(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    setData(Drinks.drinks);
    return setIsFetching(false);
  });
};

export const getFetchDrinks = (nameSearch, params, setData, setIsFetching) => {
  if (params === 'firstLetter' && nameSearch.length > 1) {
    return alert('Sua busca deve conter somente 1 (um) caracter');
  }
  setIsFetching(true);
  if (params === 'name') {
    fetchByNameValueDrink(nameSearch, setData, setIsFetching);
  }
  if (params === 'firstLetter') {
    fetchByFirstLetterValueDrinks(nameSearch, setData, setIsFetching);
  }
  if (params === 'ingredients') {
    fetchByIngredientsValueDrinks(nameSearch, setData, setIsFetching);
  }
  return setIsFetching(false);
};
