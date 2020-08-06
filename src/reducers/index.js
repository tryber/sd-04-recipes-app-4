import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import { detailsReducer, recommendationsReducer } from './detailsReducers';
import dataReducers from './dataReducers';

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
  dataReducers,
});

export default rootReducer;
