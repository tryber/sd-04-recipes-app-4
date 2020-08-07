import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

const renderThumb = (recipe, index, setRedirect) => {
  const { img, name } = recipe;
  return (
    <div data-testid={`${index}-recipe-card`}>
      <button type="button" onClick={() => setRedirect(true)} className="buttonCard">
        <img
          className="thumbnail"
          alt={`imagem de uma refeição: ${name}`}
          data-testid={`${index}-horizontal-image`}
          src={img}
        />
      </button>
    </div>
  );
};

const renderCardInfo = (recipe, index, setRedirect) => {
  const { name, type, id } = recipe;
  return (
    <>
      <div className="card-title">
        <div>
          <button type="button" onClick={() => setRedirect(true)} className="buttonCard">
            <span data-testid={`${index}-horizontal-name`}>{name}</span>
          </button>
        </div>
      </div>
      {/*      <div>
        <ShareButton index={index} path={`/${type}s/${id}`} />
      </div> */}
    </>
  );
};

const renderTopInformantion = (recipe, index) => {
  const { area, category, alcoholic } = recipe;
  return (
    <div>
      <span
        className="subtitle-card"
        data-testid={`${index}-horizontal-top-text`}
      >
        {recipe.type[0] === 'c' ? `${area} - ${category}` : alcoholic}
      </span>
    </div>
  );
};

const renderDate = (recipe, index) => {
  const { doneDate } = recipe;
  return (
    <div>
      <span
        data-testid={`${index}-horizontal-done-date`}
        className="subtitle-card"
      >
        Feita em:
        {' '}
        {doneDate}
      </span>
    </div>
  );
};

const renderTagName = (recipe, index) => {
  const { tags = [] } = recipe;
  return (
    <div>
      {tags.map((tagName) => (
        <span
          key={index}
          data-testid={`${index}-${tagName}-horizontal-tag`}
          className="subtitle-card"
        >
          {`${tagName}`}
        </span>
      ))}
    </div>
  );
};

const DoneRecipeCard = ({ recipe, index, doneRecipes }) => {
  const [redirect, setRedirect] = useState(false);
  const { id, type } = recipe;

  if (redirect) return <Redirect to={!doneRecipes ? '#' : `/${type}s/${id}`} />;
  return (
    <Link to={doneRecipes ? '#' : `/${type}s/${id}`}>
      {renderThumb(recipe, index, setRedirect)}
      <div className="infoCard">
        {renderTopInformantion(recipe, index)}
        {renderCardInfo(recipe, index, setRedirect)}
        {renderDate(recipe, index, doneRecipes)}
        {renderTagName(recipe, index)}
      </div>
    </Link>
  );
};

DoneRecipeCard.defaultProps = {
  doneRecipes: undefined,
};

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  doneRecipes: PropTypes.string,
};

export default DoneRecipeCard;
