import { getMealsByName } from '../service/fetchAPI';

export const FETCH_DATA_MEALS = 'FETCH_DATA_MEALS';
export const RECEIVE_SUCCESS_MEALS = 'RECEIVE_SUCCESS_MEALS';
export const FETCH_ERROR_MEALS = 'FETCH_ERROR_MEALS';

const fetchingDataMeals = (bool) => ({
  type: FETCH_DATA_MEALS,
  isFetching: bool,
});

const fetchingErrorMeals = (error) => ({
  type: FETCH_ERROR_MEALS,
  error,
});

const receiveSuccessMeals = (apiResponse) => ({
  type: RECEIVE_SUCCESS_MEALS,
  meals: apiResponse.result,
});

export const fetchMeals = () => (dispatch) => {
  dispatch(fetchingDataMeals(true));

  return (
    //  passando '' como parametro é igual o endpoint do requisito
    getMealsByName().then((data) => {
      dispatch(receiveSuccessMeals(data));
      dispatch(fetchingDataMeals(false));
    })
    // (error) => dispatch(fetchingErrorMeals(error))
  );
};
