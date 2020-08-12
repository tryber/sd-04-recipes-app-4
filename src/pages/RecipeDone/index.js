import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import copyToClipboard from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { loadFromLocalStorage } from '../../service/localStorage';
import ShareIcon from '../../images/shareIcon.svg';
import { setAppLocation } from '../../actions/appActions';

const SaveTheClipBoard = (type, id, index) => {
  copyToClipboard(`http://localhost:3000/${type}s/${id}`);
  document.getElementsByClassName(`copyThisLink-${index}`)[0].innerHTML = 'Link copiado!';
};

const renderTagName = (recipe, index) => {
  const { tags = [] } = recipe;
  return (
    <div>
      {tags.map((tagName) => (
        <span data-testid={`${index}-${tagName}-horizontal-tag`}>{`${tagName} `}</span>
      ))}
    </div>
  );
};

const renderCardComidas = (recipe, index) => (
  <div key={recipe.id}>
    <Link to={`/${recipe.type}s/${recipe.id}`}>
      <img
        width="100px"
        alt="imageRecipeFood"
        src={recipe.image}
        data-testid={`${index}-horizontal-image`}
      />
    </Link>
    <h3 data-testid={`${index}-horizontal-name`}>{recipe.name}</h3>
    <span
      data-testid={`${index}-horizontal-top-text`}
    >
      {`${recipe.area} - ${recipe.category}`}
    </span>
    <input
      type="image"
      alt="bottonshareFood"
      data-testid={`${index}-horizontal-share-btn`}
      src={ShareIcon}
      onClick={() => SaveTheClipBoard(recipe.type, recipe.id, index)}
    />
    <div className={`copyThisLink-${index}`} />
    <p data-testid={`${index}-horizontal-done-date`}>{`feita em: ${recipe.doneDate}`}</p>
    {renderTagName(recipe, index)}
  </div>
);

const renderCardBebidas = (recipe, index) => (
  <div key={recipe.id}>
    <Link to={`/${recipe.type}s/${recipe.id}`}>
      <img
        alt="imageRecipeDrink"
        data-testid={`${index}-horizontal-image`}
        src={recipe.image}
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
      onClick={() => SaveTheClipBoard(recipe.type, recipe.id, index)}
    />
    <p data-testid={`${index}-horizontal-done-date`}>{`feita em: ${recipe.doneDate}`}</p>
    <div className={`copyThisLink-${index}`} />
    {renderTagName(recipe, index)}
  </div>
);

const renderRecipes = (done = []) => done.map((recipe, index) => {
  if (recipe.type === 'comida') {
    return renderCardComidas(recipe, index);
  }
  return renderCardBebidas(recipe, index);
});

const DoneRecipes = ({ setAppLocationProps }) => {
  const [done, setDone] = useState(loadFromLocalStorage('doneRecipes'));

  useEffect(() => {
    setAppLocationProps('Receitas Feitas');
  }, []);

  const filterAll = () => {
    setDone(loadFromLocalStorage('doneRecipes'));
  };

  const filterFood = () => {
    const newdone = loadFromLocalStorage('doneRecipes').filter(
      (recipe) => recipe.type === 'comida',
    );
    setDone(newdone);
  };

  const filterDrink = () => {
    const newdone = loadFromLocalStorage('doneRecipes').filter(
      (recipe) => recipe.type === 'bebida',
    );
    setDone(newdone);
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
      {renderRecipes(done || [])}
    </div>
  );
};

DoneRecipes.propTypes = {
  setAppLocationProps: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setAppLocationProps: (location) => dispatch(setAppLocation(location)),
});

export default connect(null, mapDispatchToProps)(DoneRecipes);
