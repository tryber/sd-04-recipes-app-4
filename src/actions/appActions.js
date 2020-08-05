export const APP_LOCATION = 'APP_LOCATION';
export const ID_ATUAL = 'ID_ATUAL';

export const setAppLocation = (location) => ({
  type: APP_LOCATION,
  location,
});

export const setIdAtual = (id) => ({
  type: ID_ATUAL,
  id,
});
