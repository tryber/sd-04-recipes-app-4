import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getDrinksByName } from '../service/fetchAPI';
import { setDataAction } from '../actions';

const Drinks = ({ getData, data }) => {

  useEffect(() => {
    getDrinksByName('').then((Drinks) => getData(Drinks.drinks));
  }, [getData]);

  const drinksRecipe = data.slice(0, 12).map((recipe, index) => (
    <div key={recipe.idDrink} data-testid={`${index}-recipe-card`}>
      <img src={recipe.strDrinkThumb} alt="foto receita" data-testid={`${index}-card-img`} />
      <span data-testid={`${index}-card-name`}>{recipe.strDrink}</span>
    </div>
  ));
  return (data.length === 1) ? <Redirect to={`/bebidas/${data[0].idDrinks}`} /> :
    (
      <div>
        <Header />
        {drinksRecipe}
        <BottomMenu />
      </div>
    );
}

const mapStateToProps = (state) => ({
  data: state.dataReducers.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);