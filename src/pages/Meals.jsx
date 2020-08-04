import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getMealsByName, getMealsCategories } from '../service/fetchAPI';
import { setDataAction } from '../actions';

const Meals = ({ getData, data }) => {

  useEffect(() => {
    getMealsByName('').then((Meals) => getData(Meals.meals));
  }, [getData]);
  // useEffect(() => {
    // getMealsCategories().then((Meals) => getData(Meals.strCategory));
  // }, [getData]);

  const mealsRecipe = data.slice(0, 12).map((recipe, index) => (
    <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
      <img src={recipe.strMealThumb} alt="foto receita" data-testid={`${index}-card-img`} />
      <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
    </div>
  ));

  // const mealsCategories = data.slice(0, 5).map((category) => (
    // <button type="button" key={category.strCategory} data-testid={`${category}-category-filter`}>{category.strCategory}</button>
  // ));
  return (data.length === 1) ? <Redirect to={`/comidas/${data[0].idMeal}`} /> :
    (
      <div>
        <Header />
        {/* {mealsCategories} */}
        {mealsRecipe}
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

export default connect(mapStateToProps, mapDispatchToProps)(Meals);