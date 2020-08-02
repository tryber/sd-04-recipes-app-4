import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import detailsReducer from './detailsReducers';

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
});

export default rootReducer;
