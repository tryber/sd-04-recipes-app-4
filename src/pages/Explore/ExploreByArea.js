import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAreaRecipe, getRecipesByArea } from '../../actions/exploreActions';
import { setAppLocation } from '../../actions/appActions';
import { getMealsByName } from '../../service/fetchAPI';

const ExploreByAreas = ({
  history,
  isFetching,
  areas,
  recipes,
  appLocation,
  setAppLocationProps,
  areasFetcher,
  recipesByArea,
  getMeals,
}) => {
  const [areaSelector, setAreaSelector] = useState('All');

  useEffect(() => {
    areasFetcher();
  }, []);

  useEffect(() => {
    if (areaSelector) {
      recipesByArea(areaSelector);
    }
  }, [areaSelector]);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <select
        data-testid="explore-by-area-dropdown"
        onChange={(event) => setAreaSelector(event.target.value)}
      >
        <option key="All" data-testid="All-option">All</option>
        {areas.map((area) => (
          <option key={area.strArea} data-testid={`${area.strArea}-option`}>{area.strArea}</option>
        ))}
      </select>
      {recipes.length
        ? recipes.slice(0, 12).map((recipe, index) => (
            <Link to={`/comidas/${recipe.idMeal}`}>
              <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
                <img
                  src={recipe.strMealThumb}
                  alt="foto receita"
                  data-testid={`${index}-card-img`}
                />
                <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.exploreRecipesByArea.isFetching,
  areas: state.exploreRecipesByArea.areas,
  recipes: state.exploreRecipesByArea.recipes,
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  areasFetcher: () => dispatch(getAreaRecipe()),
  recipesByArea: (area) => dispatch(getRecipesByArea(area)),
  setAppLocationProps: (location) => dispatch(setAppLocation(location)),
  getMeals: () => dispatch(getMealsByName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreByAreas);
