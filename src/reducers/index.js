import { combineReducers } from 'redux';
import userReducer from './userReducers';
import dataReducers from './dataReducers';

const rootReducer = combineReducers({
  userReducer,
  dataReducers,
});

export default rootReducer;
