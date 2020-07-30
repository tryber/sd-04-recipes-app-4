import { USER_LOGIN } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: { ...state.user, email: action.email, password: action.password } };
    default:
      return state;
  }
};

export default { userReducer };
