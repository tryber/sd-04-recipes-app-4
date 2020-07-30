import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// const composeEnhancers = (
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ) || compose; voltando o commit a pedido do cacique

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
