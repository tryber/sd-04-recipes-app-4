export const USER_LOGIN = 'USER_LOGIN';
export const MEALS_DATA = 'MEALS_DATA';
export const FETCHING = 'FETCHING';

export const setLogin = (email, password) => ({
  type: USER_LOGIN,
  email,
  password,
});

export const setDataAction = (data) => ({
  type: MEALS_DATA,
  data,
});

export const setFetchingAction = (isFetching) => ({
  type: FETCHING,
  isFetching,
});
