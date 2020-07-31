import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMeals } from '../actions/actionMeals'

const Meals = ({ fetchMealsProp, data }) => {
  console.log(fetchMealsProp(''))
  console.log(data);
  return (
    <div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.mealsReducer.meals,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMealsProp: (a) => dispatch(fetchMeals(a))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);