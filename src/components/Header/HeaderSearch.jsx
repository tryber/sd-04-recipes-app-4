import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDataAction, setFetchingAction } from '../../actions';
import { getFetchFoods, getFetchDrinks } from './functionsFetchHeader';

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

const HeaderSearch = ({ title, sendDataReducer, sendFetchingReducer }) => {
  const [nameSearch, setNameSearch] = useState('');
  const [params, setParams] = useState('name');

  const handleChange = (e) => {
    setParams(e.target.value);
  };

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
        onClick={() => {
          if (title === 'comidas') {
            return getFetchFoods(nameSearch, params, sendDataReducer, sendFetchingReducer);
          }
          return getFetchDrinks(nameSearch, params, sendDataReducer, sendFetchingReducer);
        }}
      >
        Buscar
      </button>
    </div>
  );
};

HeaderSearch.propTypes = {
  sendDataReducer: PropTypes.func.isRequired,
  sendFetchingReducer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  title: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  sendDataReducer: (data) => dispatch(setDataAction(data)),
  sendFetchingReducer: (data) => dispatch(setFetchingAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);
