import { APP_LOCATION, ID_ATUAL } from '../actions/appActions';

const initialState = {
  location: 'comidas',
  idAtual: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOCATION:
      return { ...state, location: action.location };
    case ID_ATUAL:
      return { ...state, idAtual: action.id };
    default:
      return state;
  }
};
