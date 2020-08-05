import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getMealsByName, getMealsCategories } from '../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../actions';

const Meals = ({ getData, data, getCategories, categories }) => {

  useEffect(() => {
    getMealsByName('').then((Meals) => getData(Meals.meals));
  }, [getData]);
  useEffect(() => {
    getMealsCategories().then((categories) => getCategories(categories.meals));
  }, [getCategories]);

  const mealsRecipe = data.slice(0, 12).map((recipe, index) => (
    <Link to={`/comidas/${data[index].idMeal}`}>
      <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
        <img src={recipe.strMealThumb} alt="foto receita" data-testid={`${index}-card-img`} />
        <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
      </div>
    </Link>
  ));
  const mealsCategories = categories.slice(0, 5).map(({ strCategory: categoryName }, index) => (
    <button type="button" key={index} data-testid={`${categoryName}-category-filter`}>{categoryName}</button>
  ));
  return (data.length === 1) ? <Redirect to={`/comidas/${data[0].idMeal}`} /> :
    (
      <div>
        <Header />
        <div>
          <button type="button" data-testid="All-category-filter">All</button>
          {mealsCategories}
        </div>
        {mealsRecipe}
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

export default connect(mapStateToProps, mapDispatchToProps)(Meals);