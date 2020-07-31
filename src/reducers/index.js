import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';

const rootReducer = combineReducers({
  userReducer,
  appReducers,
});

export default rootReducer;
