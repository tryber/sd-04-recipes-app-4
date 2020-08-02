import {
  getMealsByName,
  getMealsByFirstLetter,
  getMealsByIngredient,
  getDrinksByName,
  getDrinksByFirstLetter,
  getDrinksByIngredient,
} from '../../service/fetchAPI';

const alertNoFound = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const fetchByNameValue = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getMealsByName(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Meals.meals);
    return sendFetchingReducer(false);
  });
};

export const fetchByFirstLetterValue = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getMealsByFirstLetter(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Meals.meals);
    return sendFetchingReducer(false);
  });
};

export const fetchByIngredientsValue = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getMealsByIngredient(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Meals.meals);
    return sendFetchingReducer(false);
  });
};

export const getFetchFoods = (nameSearch, params, sendDataReducer, sendFetchingReducer) => {
  if (params === 'firstLetter' && nameSearch.length > 1) {
    return alert('Sua busca deve conter somente 1 (um) caracter');
  }
  sendFetchingReducer(true);
  if (params === 'name') {
    fetchByNameValue(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  if (params === 'firstLetter') {
    fetchByFirstLetterValue(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  if (params === 'ingredients') {
    fetchByIngredientsValue(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  return null;
};

export const fetchByNameValueDrink = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getDrinksByName(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Drinks.drinks);
    return sendFetchingReducer(false);
  });
};

export const fetchByFirstLetterValueDrinks = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getDrinksByFirstLetter(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Drinks.drinks);
    return sendFetchingReducer(false);
  });
};

export const fetchByIngredientsValueDrinks = (nameSearch, sendDataReducer, sendFetchingReducer) => {
  getDrinksByIngredient(nameSearch).then((Drinks) => {
    if (Drinks.drinks === null) {
      return alert(alertNoFound);
    }
    sendDataReducer(Drinks.drinks);
    return sendFetchingReducer(false);
  });
};

export const getFetchDrinks = (nameSearch, params, sendDataReducer, sendFetchingReducer) => {
  if (params === 'firstLetter' && nameSearch.length > 1) {
    return alert('Sua busca deve conter somente 1 (um) caracter');
  }
  sendFetchingReducer(true);
  if (params === 'name') {
    fetchByNameValueDrink(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  if (params === 'firstLetter') {
    fetchByFirstLetterValueDrinks(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  if (params === 'ingredients') {
    fetchByIngredientsValueDrinks(nameSearch, sendDataReducer, sendFetchingReducer);
  }
  return null;
};
