import PropTypes from 'prop-types';
import React, { useState } from 'react';
import copyToClipboard from 'clipboard-copy';
import { connect } from 'react-redux';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/blackHeartIcon.svg';
import NotFavoriteIcon from '../../images/whiteHeartIcon.svg';

/**
 * Styled components
 import { Social, SocialIcon } from './StyledComponents';
 */

const setLocalStorageFood = (recipe, currentFavoriteRecipes) => {
  const objForFavorite = {
    id: recipe.idMeal,
    type: 'comida',
    area: recipe.strArea,
    category: recipe.strCategory,
    alcoholicOrNot: '',
    name: recipe.strMeal,
    image: recipe.strMealThumb,
    doneDate: recipe.dateModified,
    tags: recipe.strTags,
  };
  const favoriteRecipes = [...currentFavoriteRecipes, objForFavorite];
  return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

const setLocalStorageDrink = (recipe, currentFavoriteRecipes) => {
  const objForFavorite = {
    id: recipe.idDrink,
    type: 'bebida',
    area: '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic,
    name: recipe.strDrink,
    image: recipe.strDrinkThumb,
    doneDate: recipe.dateModified,
    tags: recipe.strTags,
  };
  const favoriteRecipes = [...currentFavoriteRecipes, objForFavorite];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
};

const SocialMenu = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);

  const handleShare = () => {
    copyToClipboard(window.location.href);
    document.getElementById('copyLink').innerHTML = 'Link copiado!';
  };

  const currentFavoriteRecipes = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];

  const handleFavorite = () => {
    if (recipe.idMeal) {
      setLocalStorageFood(recipe, currentFavoriteRecipes);
    } else {
      setLocalStorageDrink(recipe, currentFavoriteRecipes);
    }
    setFavorite(!favorite);
  };

  return (
    <div>
      <input
        type="image"
        data-testid="share-btn"
        src={ShareIcon}
        alt="share botton"
        onClick={() => handleShare()}
      />
      <input
        type="image"
        data-testid="favorite-btn"
        src={!favorite ? NotFavoriteIcon : FavoriteIcon}
        alt="favorite bottom"
        onClick={() => handleFavorite()}
      />
      <div id="copyLink" />
    </div>
  );
};

SocialMenu.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.detailsReducer.recipe,
});

export default connect(mapStateToProps, null)(SocialMenu);
