import { combineReducers } from 'redux';
import userReducer from './userReducers';
import appReducers from './appReducers';
<<<<<<< HEAD
import dataReducers from './dataReducers';

=======
import { detailsReducer, recommendationsReducer } from './detailsReducers';
>>>>>>> 65c0dcd66c1887bf9997292c58dc4a26dbef69c8

const rootReducer = combineReducers({
  userReducer,
  appReducers,
<<<<<<< HEAD
  dataReducers,
=======
  detailsReducer,
  recommendationsReducer,
>>>>>>> 65c0dcd66c1887bf9997292c58dc4a26dbef69c8
});

export default rootReducer;
