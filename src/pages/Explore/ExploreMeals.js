import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRandomRecipe } from '../../actions/exploreActions';
import BottomMenu from '../../components/BottomMenu';

const ExploreMeals = ({
  history,
  recipe,
  randomRecipeFetcher,
}) => {
  useEffect(() => {
    if (recipe.length) {
      history.push(`/comidas/${recipe[0].idMeal}`);
    }
  }, [recipe]);

  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/comidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={() => history.push('/explorar/comidas/area')}
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => randomRecipeFetcher('comidas')}
      >
        Me Surpreenda!
      </button>
      <BottomMenu />
    </div>
  );
};

ExploreMeals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  randomRecipeFetcher: PropTypes.func.isRequired,
  recipe: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.randomRecipeReducer.recipe,
});

const mapDispatchToProps = (dispatch) => ({
  randomRecipeFetcher: (type) => dispatch(getRandomRecipe(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreMeals);
