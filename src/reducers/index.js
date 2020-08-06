import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
import { detailsReducer, recommendationsReducer } from './detailsReducers';
<<<<<<< HEAD
=======
import dataReducers from './dataReducers';
>>>>>>> 15177bf170682a1124940c79186697d5169dadd9

const rootReducer = combineReducers({
  userReducer,
  appReducers,
  detailsReducer,
  recommendationsReducer,
<<<<<<< HEAD
=======
  dataReducers,
>>>>>>> 15177bf170682a1124940c79186697d5169dadd9
});

export default rootReducer;
