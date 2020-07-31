import { FETCH_DATA_MEALS, FETCH_ERROR_MEALS, RECEIVE_SUCCESS_MEALS } from '../actions/actionMeals';

const INITIAL_STATE = {
  isFetchingMeal: true,
  error: '',
  meals: [],
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_MEALS:
      return { ...state, isFetchingMeal: action.isFetching };
    case RECEIVE_SUCCESS_MEALS:
      return { ...state, meals: action.meals };
    case FETCH_ERROR_MEALS:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default mealsReducer;
