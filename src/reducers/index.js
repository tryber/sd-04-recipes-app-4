import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import { detailsReducer, recommendationsReducer } from './detailsReducers';

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
});

export default rootReducer;
