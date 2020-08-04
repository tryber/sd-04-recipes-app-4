import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, fetchRecommendations } from '../../actions/detailsActions';
import RecipesRecommendations from '../../components/RecipesRecommendations';
import SocialMenu from '../../components/SocialMenu';

/**
 * Styled components
 */
import { Recipe, RecipeImage, RecipeHeader, RecipeTitle, RecipeVideo } from './StyledComponents';

/**
 * Render the recipe ingredients list
 *
 * @param {array} ingredients Array with ingredients - from redux datailsReducer.ingredients
 */
const renderIngredientsList = (ingredients) => (
  <section>
    <h2>Ingredients</h2>
    <ul>
      {ingredients.map((data, index) => (
        <li key={data.ingredient} data-testid={`${index}-ingredient-name-and-measure`}>
          {`${data.ingredient} - ${data.measure}`}
        </li>
      ))}
    </ul>
  </section>
);

const renderVideo = (strYoutube) => {
  return (
    <section>
      <h2>Videos</h2>
      <RecipeVideo
        title="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
        frameBorder="0"
      />
    </section>
  );
};

export const RecipeDetails = (props) => {
  const {
    match,
    history,
    recipeFetching,
    recipeFetch,
    recipe,
    recommendationsFetch,
    appLocation,
  } = props;
  const { id } = match.params; // Recipe ID
  const {
    strMealThumb,
    strDrinkThumb,
    strMeal,
    strDrink,
    strCategory,
    strAlcoholic,
    strInstructions,
    strYoutube,
    ingredients,
  } = recipe;

  /**
   * Fetch recipe and recommendations on mount
   */
  useEffect(() => {
    recipeFetch(id, appLocation);
    recommendationsFetch(appLocation);
  }, []);

  /**
   * Handle recipe start action
   */
  const startRecipe = () => {
    history.push(`/comidas/${id}/in-progress`);
  };

  if (recipeFetching) return <p>loading...</p>;

  return (
    <Recipe>
      <RecipeImage imageSrc={appLocation === 'comida' ? strMealThumb : strDrinkThumb} />
      <RecipeHeader>
        <RecipeTitle data-testid="recipe-title">
          {appLocation === 'comida' ? strMeal : strDrink}
        </RecipeTitle>
        <SocialMenu />
      </RecipeHeader>
      <span data-testid="recipe-category">
        {appLocation === 'comida' ? strCategory : strAlcoholic}
      </span>
      {renderIngredientsList(ingredients)}
      <h2>Instruction</h2>
      <p data-testid="instructions">{strInstructions}</p>
      {strYoutube && renderVideo(strYoutube)}
      <RecipesRecommendations />
      <button type="button" data-testid="start-recipe-btn" onClick={() => startRecipe()}>
        Iniciar Receita
      </button>
    </Recipe>
  );
};

const mapStateToProps = (state) => ({
  recipe: state.detailsReducer.recipe,
  recipeFetching: state.detailsReducer.isFetching,
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  recipeFetch: (id, type) => dispatch(fetchRecipe(id, type)),
  recommendationsFetch: (type) => dispatch(fetchRecommendations(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
