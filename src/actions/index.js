export const USER_LOGIN = 'USER_LOGIN';

export const setLogin = ( email, password ) => ({
  type: USER_LOGIN,
  email,
  password,
});
