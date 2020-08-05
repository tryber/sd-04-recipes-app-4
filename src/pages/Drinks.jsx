import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getDrinksByName, getDrinksCategories } from '../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../actions';

const Drinks = ({ getData, data, getCategories, categories }) => {

  useEffect(() => {
    getDrinksByName('').then((Drinks) => getData(Drinks.drinks));
  }, [getData]);
  useEffect(() => {
    getDrinksCategories().then((categories) => getCategories(categories.drinks));
  }, [getCategories]);

  const drinksRecipe = data.slice(0, 12).map((recipe, index) => (
    <Link to={`/bebidas/${data[index].idDrink}`}>
    <div key={recipe.idDrink} data-testid={`${index}-recipe-card`}>
      <img src={recipe.strDrinkThumb} alt="foto receita" data-testid={`${index}-card-img`} />
      <span data-testid={`${index}-card-name`}>{recipe.strDrink}</span>
    </div>
    </Link>
  ));
  const drinksCategories = categories.slice(0, 5).map((category, index) => (
    <button type="button" key={index} data-testid={`${category.strCategory}-category-filter`}>{category.strCategory}</button>
  ));
  return (data.length === 1) ? <Redirect to={`/bebidas/${data[0].idDrinks}`} /> :
    (
      <div>
        <Header />
        <div>
          <button type="button" data-testid="All-category-filter">All</button>
          {drinksCategories}
        </div>
        {drinksRecipe}
        <BottomMenu />
      </div>
    );
}

const mapStateToProps = (state) => ({
  data: state.dataReducers.data,
  categories: state.dataReducers.categories,

});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
  getCategories: (category) => dispatch(getCategoryAction(category)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);