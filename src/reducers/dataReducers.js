import { MEALS_DATA, FETCHING } from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
};

const dataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MEALS_DATA:
      return { ...state, data: action.data };
    case FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default dataReducers;
