import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
<<<<<<< HEAD
import { detailsReducer, recommendationsReducer } from './detailsReducers';
=======
import dataReducers from './dataReducers';
>>>>>>> 5361d7e1b7eb928fcdbbfd0be6e5d55bfc60f360

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
});

export default rootReducer;
