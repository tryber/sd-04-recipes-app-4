import React, { useState } from 'react';
import copyToClipboard from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { loadFromLocalStorage } from '../../service/localStorage';
import ShareIcon from '../../images/shareIcon.svg';

const SaveClipBoard = (type, id, index) => {
  copyToClipboard(`http://localhost:3000/${type}s/${id}`);
  document.getElementById(`copyLink-${index}`).innerHTML = 'Link copiado!';
};

const renderTagName = (recipe, index) => {
  const { tags } = recipe;

  return (
    <div>
      {tags.map((tagName) => (
        <span
          data-testid={`${index}-${tagName}-horizontal-tag`}
        >
          {`${tagName} `}
        </span>
      ))}
    </div>
  );
};

const renderCardComidas = (recipe, index) => (
  <div key={recipe.id}>
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
    <div id={`copyLink-${index}`} />
    <p data-testid={`${index}-horizontal-done-date`}>{`feita em: ${recipe.doneDate}`}</p>
    {renderTagName(recipe, index)}
  </div>
);

const renderCardBebidas = (recipe, index) => (
  <div key={recipe.id}>
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
    <p data-testid={`${index}-horizontal-done-date`}>{`feita em: ${recipe.doneDate}`}</p>
    <div id={`copyLink-${index}`} />
  </div>
);

const renderRecipes = (done) => done.map((recipe, index) => {
  if (recipe.type === 'comida') {
    return renderCardComidas(recipe, index);
  }
  return renderCardBebidas(recipe, index);
});

const DoneRecipes = () => {
  const [done, setDone] = useState(loadFromLocalStorage('doneRecipes'));

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
      {renderRecipes(done)}
    </div>
  );
};

export default DoneRecipes;
