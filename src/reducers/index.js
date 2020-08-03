import { combineReducers } from 'redux';
import userReducer from './userReducers';
<<<<<<< HEAD
import mealsReducer from './mealsReducer';

const rootReducer = combineReducers({
  userReducer,
  mealsReducer,
=======
import appReducers from './appReducers';
import dataReducers from './dataReducers';


const rootReducer = combineReducers({
  userReducer,
  appReducers,
  dataReducers,
>>>>>>> master
});

export default rootReducer;
