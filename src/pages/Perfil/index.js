import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './perfil.css';
import { loadFromLocalStorage, clearLocalStorage } from '../../service/localStorage';
import Header from '../../components/Header/Header';
import { setAppLocation } from '../../actions/appActions';

const Perfil = ({ sendLocation }) => {
  const emailverifyLocalStorage = () => {
    if (localStorage.getItem('user')) {
      const { email } = loadFromLocalStorage('user');
      return email;
    }
    return '';
  };

  return (
    <div>
      <Header />
      <div className="perfil-container">
        <div data-testid="profile-email">{emailverifyLocalStorage()}</div>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
            className="button-perfil"
            onClick={() => sendLocation('Receitas Feitas')}
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
            className="button-perfil"
            onClick={() => sendLocation('Receitas Favoritas')}
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            onClick={() => {
              clearLocalStorage();
              sendLocation('comidas');
            }}
            data-testid="profile-logout-btn"
            className="button-perfil"
          >
            Sair
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendLocation: (location) => dispatch(setAppLocation(location)),
});

Perfil.propTypes = {
  sendLocation: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Perfil);
