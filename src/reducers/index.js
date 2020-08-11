import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import { detailsReducer, recommendationsReducer } from './detailsReducers';
import dataReducers from './dataReducers';
import { randomRecipeReducer, exploreIngredientsReducer, exploreRecipesByArea } from './exploreReducers';

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
  dataReducers,
  randomRecipeReducer,
  exploreIngredientsReducer,
  exploreRecipesByArea,
});

export default rootReducer;
