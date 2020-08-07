import React, { useState } from 'react';
import copyToClipboard from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { loadFromLocalStorage, saveToLocalStorage } from '../../service/localStorage';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/blackHeartIcon.svg';

const SaveClipBoard = (type, id, index) => {
  copyToClipboard(`http://localhost:3000/${type}s/${id}`);
  console.log(`http://localhost:3000/${type}/${id}`);
  document.getElementById(`copyLink-${index}`).innerHTML = 'Link copiado!';
};

const renderCardComidas = (recipe, index, removeItemOfFavorites) => (
  <div>
    <Link to={`/${recipe.type}s/${recipe.id}`}>
      <img
        data-testid={`${index}-horizontal-image`}
        src={recipe.image}
        alt="imageRecipeFood"
        width="100px"
      />
    </Link>
    <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
    <div data-testid={`${index}-horizontal-top-text`}>{`${recipe.area} - ${recipe.category}`}</div>
    <input
      type="image"
      src={ShareIcon}
      alt="bottonshareFood"
      data-testid={`${index}-horizontal-share-btn`}
      onClick={() => SaveClipBoard(recipe.type, recipe.id, index)}
    />
    <input
      type="image"
      src={FavoriteIcon}
      alt="bottonshareFood"
      data-testid={`${index}-horizontal-favorite-btn`}
      onClick={() => removeItemOfFavorites(recipe.name)}
    />
    <div id={`copyLink-${index}`} />
  </div>
);

const renderCardBebidas = (recipe, index, removeItemOfFavorites) => (
  <div>
    <Link to={`/${recipe.type}s/${recipe.id}`}>
      <img
        data-testid={`${index}-horizontal-image`}
        src={recipe.image}
        alt="imageRecipeDrink"
        width="100px"
      />
      <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
    </Link>
    <div data-testid={`${index}-horizontal-top-text`}>{recipe.alcoholicOrNot}</div>
    <input
      type="image"
      src={ShareIcon}
      alt="bottonshareDrink"
      data-testid={`${index}-horizontal-share-btn`}
      onClick={() => SaveClipBoard(recipe.type, recipe.id, index)}
    />
    <input
      type="image"
      src={FavoriteIcon}
      alt="bottonshareDrink"
      data-testid={`${index}-horizontal-favorite-btn`}
      onClick={() => removeItemOfFavorites(recipe.name)}
    />
    <div id={`copyLink-${index}`} />
  </div>
);

const renderRecipes = (favorites, removeItemOfFavorites) => favorites.map((recipe, index) => {
  if (recipe.type === 'comida') {
    return renderCardComidas(recipe, index, removeItemOfFavorites);
  }
  return renderCardBebidas(recipe, index, removeItemOfFavorites);
});

const FavoriteRecipes = () => {
  const [favorites, setFavorites] = useState(loadFromLocalStorage('favoriteRecipes'));

  const filterAll = () => {
    setFavorites(loadFromLocalStorage('favoriteRecipes'));
  };

  const filterFood = () => {
    const newFavorites = loadFromLocalStorage('favoriteRecipes').filter(
      (recipe) => recipe.type === 'comida',
    );
    setFavorites(newFavorites);
  };

  const filterDrink = () => {
    const newFavorites = loadFromLocalStorage('favoriteRecipes').filter(
      (recipe) => recipe.type === 'bebida',
    );
    setFavorites(newFavorites);
  };

  const removeItemOfFavorites = (name) => {
    const newFavorites = loadFromLocalStorage('favoriteRecipes').filter(
      (recipe) => recipe.name !== name,
    );
    setFavorites(newFavorites);
    saveToLocalStorage('favoriteRecipes', newFavorites);
  };

  return (
    <div>
      <Header />
      <button type="button" data-testid="filter-by-all-btn" onClick={() => filterAll()}>
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn" onClick={() => filterFood()}>
        Foods
      </button>
      <button type="button" data-testid="filter-by-drink-btn" onClick={() => filterDrink()}>
        Drinks
      </button>
      {renderRecipes(favorites, removeItemOfFavorites)}
    </div>
  );
};

export default FavoriteRecipes;
