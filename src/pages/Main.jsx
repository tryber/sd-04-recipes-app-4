import React from 'react';
import { connect } from 'react-redux';


import Header from '../components/Header/Header.jsx';
import BottomMenu from '../components/BottomMenu';
import { getMealsByName, getDrinksByName } from '../service/fetchAPI';
import { setDataAction } from '../actions';

const Main = ({ getData, data }) => {
  getMealsByName('').then((Meals) => getData(Meals.meals));
  // getDrinksByName('').then((Drinks) => getData(Drinks.drinks));
  // const recipemeal = meals.map((item) => <span key={item.idMeal}>{item.strMeal}</span>)
  const mealsrecipe = data.slice(0, 12).map((recipe, index) => (
    <div key={recipe.idMeal} data-testid={`${index}-recipe-card`}>
      <img src={recipe.strMealThumb} alt="foto receita" data-testid={`${index}-card-img`} />
      <span data-testid={`${index}-card-name`}>{recipe.strMeal}</span>
    </div>
  ));
  // const drinksrecipe = data.slice(13, 25).map((recipe, index) => (
  //   <div key={recipe.idDrink} data-testid={`${index}-recipe-card`}>
  //     <img src={recipe.strDrinkThumb} alt="foto receita" data-testid={`${index}-card-img`} />
  //     <span data-testid={`${index}-card-name`}>{recipe.strDrink}</span>
  //   </div>
  // ));
  return (
    <div>
      <Header />
      {mealsrecipe}
      {/* {drinksrecipe} */}
      <BottomMenu />
    </div>
  );
}

const mapStateToProps = (state) => ({
  // Drinks: ,
  data: state.dataReducers.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(setDataAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);