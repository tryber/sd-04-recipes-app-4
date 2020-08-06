import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getDrinksByName, getDrinksCategories, getDrinksByCategory } from '../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../actions';

const handleCategory = (categoryName, getData, setSelectedCategory, selectedCategory) => {
  // console.log(categoryName, getData);
  if (selectedCategory !== categoryName && categoryName !== 'All') {
    setSelectedCategory(categoryName);
    return getDrinksByCategory(categoryName).then((Drinks) => getData(Drinks.drinks));
  }
  if (categoryName === 'All' || selectedCategory === categoryName) {
    setSelectedCategory('All');
    return getDrinksByName('').then((Drinks) => getData(Drinks.drinks));
  }
  return false;
};

const Drinks = ({ getData, data, getCategories, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  useEffect(() => {
    getDrinksByName('').then((recipes) => getData(recipes.drinks));
  }, [getData]);
  useEffect(() => {
    getDrinksCategories().then((recipesCategories) => getCategories(recipesCategories.drinks));
  }, [getCategories]);

  const drinksRecipe = data.slice(0, 12).map((recipe, index) => (
    <Link to={`/bebidas/${data[index].idDrink}`} key={recipe.idDrink}>
      <div key={recipe.idDrink} data-testid={`${index}-recipe-card`}>
        <img src={recipe.strDrinkThumb} alt="foto receita" data-testid={`${index}-card-img`} />
        <span data-testid={`${index}-card-name`}>{recipe.strDrink}</span>
      </div>
    </Link>
  ));
  const drinksCategories = categories.slice(0, 5).map(({ strCategory: categoryName }) => (
    <button type="button" key={categoryName} data-testid={`${categoryName}-category-filter`} onClick={() => handleCategory(categoryName, getData, setSelectedCategory, selectedCategory)}>{categoryName}</button>
  ));
  return (data.length === 1) ? <Redirect to={`/bebidas/${data[0].idDrink}`} /> :
    (
      <div>
        <Header />
        <div>
          <button type="button" data-testid="All-category-filter" onClick={() => handleCategory('All', getData, setSelectedCategory, selectedCategory)}>All</button>
          {drinksCategories}
        </div>
        {drinksRecipe}
        <BottomMenu />
      </div>
    );
};

Drinks.propTypes = {
  getData: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.dataReducers.data,
  categories: state.dataReducers.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
  getCategories: (category) => dispatch(getCategoryAction(category)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
