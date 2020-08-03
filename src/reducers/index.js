import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import dataReducers from './dataReducers';


const rootReducer = combineReducers({
  userReducer,
  appReducers,
  dataReducers,
});

export default rootReducer;
