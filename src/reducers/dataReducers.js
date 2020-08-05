import { RECIPE_DATA, FETCHING, CATEGORIES } from '../actions';

const INITIAL_STATE = {
  data: [],
  categories: [],
  isFetching: false,
};

const dataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIPE_DATA:
      return { ...state, data: action.data };
    case CATEGORIES:
      return { ...state, categories: action.categories };
    case FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default dataReducers;
