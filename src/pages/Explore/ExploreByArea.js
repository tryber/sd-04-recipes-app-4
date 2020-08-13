import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAreaRecipe, getRecipesByArea } from '../../actions/exploreActions';
import { setAppLocation } from '../../actions/appActions';
import { getMealsByName } from '../../service/fetchAPI';
import Loading from '../../components/Loading';
import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header/Header';

const ExploreByAreas = ({
  isFetching,
  areas,
  recipes,
  areasFetcher,
  recipesByArea,
  setAppLocationProps,
}) => {
  const [areaSelector, setAreaSelector] = useState('All');

  useEffect(() => {
    setAppLocationProps('Explorar Origem');
    areasFetcher();
  }, []);

  useEffect(() => {
    if (areaSelector) {
      recipesByArea(areaSelector);
    }
  }, [areaSelector]);

  if (isFetching) return <Loading />;

  return (
    <div>
      <Header />
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
      <BottomMenu />
    </div>
  );
};

ExploreByAreas.propTypes = {
  areas: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  areasFetcher: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  recipes: PropTypes.shape({
    length: PropTypes.number.isRequired,
    slice: PropTypes.func.isRequired,
  }).isRequired,
  recipesByArea: PropTypes.func.isRequired,
  setAppLocationProps: PropTypes.func.isRequired,
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
