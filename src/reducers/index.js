import { combineReducers } from 'redux';
import userReducer from './userReducers';
import mealsReducer from './mealsReducer';

const rootReducer = combineReducers({
  userReducer,
  mealsReducer,
});

export default rootReducer;
