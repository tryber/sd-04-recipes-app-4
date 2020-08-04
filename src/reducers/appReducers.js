import { APP_LOCATION } from '../actions/appActions';

const initialState = {
  location: 'bebidas',
};

export default (state = initialState, { type, location }) => {
  switch (type) {
    case APP_LOCATION:
      return { ...state, location };

    default:
      return state;
  }
};
