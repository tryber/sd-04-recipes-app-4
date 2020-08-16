import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setDataAction, setFetchingAction } from '../../actions';
import { getFetchFoods, getFetchDrinks } from './functionsFetchHeader';

/** Styled Components */
import { SearchBar, SearchButton, SearchContainer, SearchType, SearchSection } from './StyledComponents';

const renderRadioInput = (param, value, dataTestId, label, handleChange) => (
  <SearchType
    data-testid={dataTestId}
    selected={param === value}
    onClick={() => handleChange(value)}
  >
    {label}
  </SearchType>
);

const HeaderSearch = ({ title, sendDataReducer, sendFetchingReducer }) => {
  const [nameSearch, setNameSearch] = useState('');
  const [params, setParams] = useState('name');

  const handleChange = (value) => {
    setParams(value);
  };

  return (
    <SearchContainer className="container-inputs">
      <SearchSection>
        {renderRadioInput(
          params,
          'ingredients',
          'ingredient-search-radio',
          'Ingredientes',
          handleChange
        )}
        {renderRadioInput(params, 'name', 'name-search-radio', 'Nome', handleChange)}
        {renderRadioInput(
          params,
          'firstLetter',
          'first-letter-search-radio',
          'Primeira letra',
          handleChange
        )}
      </SearchSection>
      <SearchSection>
        <SearchBar
          type="text"
          placeholder="Digite sua busca"
          data-testid="search-input"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <SearchButton
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
        </SearchButton>
      </SearchSection>
    </SearchContainer>
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
