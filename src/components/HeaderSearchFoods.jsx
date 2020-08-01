import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMealsByName, getMealsByFirstLetter, getMealsByIngredient } from '../service/fetchAPI';
import { setDataAction, setFetchingAction } from '../actions';

// [e.target.name]: e.target.value,
const alertNoFound = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

const renderRadioInput = (htmlFor, value, dataTestId, label, handleChange) => (
  <label htmlFor={htmlFor}>
    <input
      type="radio"
      name="searchParam"
      value={value}
      data-testid={dataTestId}
      onClick={(e) => handleChange(e)}
    />
    {label}
  </label>
);

const fetchByNameValue = (nameSearch, setData, setIsFetching) => {
  getMealsByName(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

const fetchByFirstLetterValue = (nameSearch, setData, setIsFetching) => {
  getMealsByFirstLetter(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

const fetchByIngredientsValue = (nameSearch, setData, setIsFetching) => {
  getMealsByIngredient(nameSearch).then((Meals) => {
    if (Meals.meals === null) {
      return alert(alertNoFound);
    }
    setData(Meals.meals);
    return setIsFetching(false);
  });
};

const getFetch = (nameSearch, params, setData, setIsFetching) => {
  if (params === 'firstLetter' && nameSearch.length > 1) {
    return alert('Sua busca deve conter somente 1 (um) caracter');
  }
  setIsFetching(true);
  if (params === 'name') {
    fetchByNameValue(nameSearch, setData, setIsFetching);
  }
  if (params === 'firstLetter') {
    fetchByFirstLetterValue(nameSearch, setData, setIsFetching);
  }
  if (params === 'ingredients') {
    fetchByIngredientsValue(nameSearch, setData, setIsFetching);
  }
  return setIsFetching(false);
};

const HeaderSearchFoods = ({ sendDataReducer, sendFetchingReducer }) => {
  const [nameSearch, setNameSearch] = useState('');
  const [params, setParams] = useState('name');
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (e) => {
    setParams(e.target.value);
  };

  useEffect(() => {
    sendDataReducer(data);
  }, [data]);

  useEffect(() => {
    sendFetchingReducer(isFetching);
  }, [isFetching]);

  return (
    <div className="container-inputs">
      <div>
        <input
          type="text"
          placeholder=""
          data-testid="search-input"
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </div>
      <div>
        {renderRadioInput(
          'ingredient',
          'ingredients',
          'ingredient-search-radio',
          'Ingredientes',
          handleChange,
        )}
        {renderRadioInput('name', 'name', 'name-search-radio', 'Nome', handleChange)}
        {renderRadioInput(
          'firstLetter',
          'firstLetter',
          'first-letter-search-radio',
          'Primeira letra',
          handleChange,
        )}
      </div>
      <button
        type="button"
        name="search"
        data-testid="exec-search-btn"
        onClick={() => getFetch(nameSearch, params, setData, setIsFetching)}
      >
        Buscar
      </button>
    </div>
  );
};

HeaderSearchFoods.propTypes = {
  sendDataReducer: PropTypes.func.isRequired,
  sendFetchingReducer: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  sendDataReducer: (data) => dispatch(setDataAction(data)),
  sendFetchingReducer: (data) => dispatch(setFetchingAction(data)),
});

export default connect(null, mapDispatchToProps)(HeaderSearchFoods);
