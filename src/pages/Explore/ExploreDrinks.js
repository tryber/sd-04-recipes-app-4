import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRandomRecipe } from '../../actions/exploreActions';
import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header/Header';
import { setAppLocation } from '../../actions/appActions';

const ExploreDrinks = ({
  history,
  recipe,
  randomRecipeFetcher,
  changeAppLocation,
}) => {
  useEffect(() => {
    changeAppLocation('Explorar Comidas');
  }, []);
  useEffect(() => {
    if (recipe.length) history.push(`/bebidas/${recipe[0].idDrink}`);
  }, [recipe]);
  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/bebidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => randomRecipeFetcher('bebidas')}
      >
        Me Surpreenda!
      </button>
      <BottomMenu />
    </div>
  );
};

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  randomRecipeFetcher: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  changeAppLocation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.randomRecipeReducer.recipe,
});

const mapDispatchToProps = (dispatch) => ({
  randomRecipeFetcher: (type) => dispatch(getRandomRecipe(type)),
  changeAppLocation: (location) => dispatch(setAppLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreDrinks);
