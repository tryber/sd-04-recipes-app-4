import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Carroussel } from './StyledComponents';

const RecipesRecommendations = ({ recommendations, recommendationsFetching, appLocation }) => {
  const [actualPosition, setactualPosition] = useState({ card: 0 });

  useEffect(() => {
    if (recommendations.length > 0) {
      setactualPosition((prevState) => {
        const state = { ...prevState };
        recommendations.forEach((recommendation, index) => {
          if (index < 2) {
            state[`${index}-recomendation-card`] = true;
          } else {
            state[`${index}-recomendation-card`] = false;
          }
        });
        return state;
      });
    }
  }, [recommendations]);

  const handlePosition = () => {
    if (actualPosition.card < recommendations.length - 1) {
      setactualPosition((prevState) => ({
        ...prevState,
        card: prevState.card + 1,
        [`${prevState.card + 2}-recomendation-card`]: true,
        [`${prevState.card}-recomendation-card`]: false,
      }));
    }
  };

  if (recommendationsFetching) return null;

  return (
    <div>
      <h2>Recomendadas</h2>
      <Carroussel>
        {recommendations.map((recipe, index) => (
          <Card
            data-testid={`${index}-recomendation-card`}
            hidden={!actualPosition[`${index}-recomendation-card`]}
          >
            <span data-testid={`${index}-recomendation-title`}>
              {appLocation === 'comidas' ? recipe.strDrink : recipe.strMeal}
            </span>
          </Card>
        ))}
      </Carroussel>
      <button type="button" onClick={() => handlePosition()}>
        Proxima
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recommendations: state.recommendationsReducer.recommendations,
  recommendationsFetching: state.recommendationsReducer.isFetching,
  appLocation: state.appReducers.location,
});

RecipesRecommendations.propTypes = {
  recommendations: PropTypes.objectOf(PropTypes.string).isRequired,
  recommendationsFetching: PropTypes.func.isRequired,
  appLocation: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(RecipesRecommendations);
