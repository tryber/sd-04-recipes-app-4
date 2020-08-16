import React, { useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import BottomMenu from '../../components/BottomMenu';
import { getMealsByName, getMealsCategories, getMealsByCategory } from '../../service/fetchAPI';
import { setDataAction, getCategoryAction } from '../../actions';
import Card from '../../components/Card';
import { Recipes } from './StyledComponets';

const handleCategory = (categoryName, getData, setSelectedCategory, selectedCategory) => {
  // console.log(categoryName, getData);
  if (selectedCategory !== categoryName && categoryName !== 'All') {
    setSelectedCategory(categoryName);
    return getMealsByCategory(categoryName).then((Meals) => getData(Meals.meals));
  }
  if (categoryName === 'All' || selectedCategory === categoryName) {
    setSelectedCategory('All');
    return getMealsByName('').then((Meals) => getData(Meals.meals));
  }
  return false;
};

const Meals = ({ getData, data, getCategories, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    if (!data.length) getMealsByName('').then((recipes) => getData(recipes.meals));
  }, [getData]);
  useEffect(() => {
    getMealsCategories().then((recipesCategories) => getCategories(recipesCategories.meals));
  }, [getCategories]);

  const mealsRecipe = data
    .slice(0, 12)
    .map((recipe, index) => <Card type="meal" data={recipe} index={index} />);

  const mealsCategories = categories.slice(0, 5).map(({ strCategory: categoryName }) => (
    <button
      type="button"
      key={`${categoryName} melas`}
      data-testid={`${categoryName}-category-filter`}
      onClick={() => handleCategory(categoryName, getData, setSelectedCategory, selectedCategory)}
    >
      {categoryName}
    </button>
  ));
  return data.length === 1 && selectedCategory !== 'Goat' && selectedCategory !== 'All' ? (
    <Redirect to={`/comidas/${data[0].idMeal}`} />
  ) : (
    <div>
      <Header />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={() => handleCategory('All', getData, setSelectedCategory, selectedCategory)}
        >
          All
        </button>
        {mealsCategories}
      </div>
      <Recipes>{mealsRecipe}</Recipes>
      <BottomMenu />
    </div>
  );
};

Meals.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
