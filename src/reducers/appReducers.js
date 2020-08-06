import { APP_LOCATION, ID_ATUAL, ID_FAVORITE } from '../actions/appActions';

const initialState = {
  location: 'comidas',
  idAtual: '',
  idsFavorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOCATION:
      return { ...state, location: action.location };
    case ID_ATUAL:
      return { ...state, idAtual: action.id };
    case ID_FAVORITE:
      return { ...state, idsFavorites: [...state.idsFavorites, action.id] };
    default:
      return state;
  }
};
