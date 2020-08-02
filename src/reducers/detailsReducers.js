import { RECIPE_FETCH, RECIPE_FETCH_SUCCESS, RECIPE_FETCH_ERROR } from '../actions/detailsActions';

const initialState = {
  isFetching: true,
  recipe: {},
  isErrored: false,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_FETCH:
      return { ...state, isFetching: !state.isFetching };

    case RECIPE_FETCH_SUCCESS:
      return { ...state, recipe: { ...state.recipe, ...action.recipe[0] } };

    case RECIPE_FETCH_ERROR:
      return { ...state, isErrored: true };

    default:
      return state;
  }
};

export default detailsReducer;
