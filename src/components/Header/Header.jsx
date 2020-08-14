import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';
// import './header.css';
import { setAppLocation } from '../../actions/appActions';
import { HeaderContainer, HeaderTitle } from './StyledComponents';

const capitalizeFirstLetter = (string) => {
  const titles = {
    comidas: 'Comidas',
    bebidas: 'Bebidas',
    'receitas-favoritas': 'Receitas Favoritas',
    explorar: 'Explorar',
    'explorar/comidas': 'Explorar Comidas',
    'explorar/bebidas': 'Explorar Bebidas',
    'explorar/comidas/ingredientes': 'Explorar Ingredientes',
    'explorar/bebidas/ingredientes': 'Explorar Ingredientes',
    'explorar/comidas/area': 'Explorar Origem',
    'explorar/bebidas/area': 'Explorar Origem',
    'receitas-feitas': 'Receitas Feitas',
    perfil: 'Perfil',
  };

  // if (string === 'receitas-favoritas') {
  //   return 'Receitas Favoritas';
  // }
  // if (string === 'explorar/comidas') {
  //   return 'Explorar Comidas';
  // }

  // if (string === 'explorar/bebidas') {
  //   return 'Explorar Bebidas';
  // }
  return titles[string];
  // return string.charAt(0).toUpperCase() + string.slice(1);
};

const checkAppLocation = (path, appLocation, locationChanger) => {
  if (path.includes(appLocation)) return true;
  return locationChanger(path);
};

const Header = ({ title, sendLocation }) => {
  const [displayInputShow, setDisplayInputShow] = useState(false);
  useEffect(() => {
    checkAppLocation(window.location.pathname.replace('/', ''), title, sendLocation);
  }, [title, sendLocation]);
  const showInputSearch = () => {
    setDisplayInputShow(!displayInputShow);
  };

  const renderSearch = () => {
    if (title === 'comidas' || title === 'bebidas' || title === 'explorar/comidas/area') {
      return (
        <input
          type="image"
          src={searchIcon}
          onClick={() => showInputSearch()}
          data-testid="search-top-btn"
          alt="imageLogo"
        />
      );
    }
    return null;
  };

  return (
    <div className="container">
      <HeaderContainer>
        <Link to="/perfil">
          <input
            type="image"
            data-testid="profile-top-btn"
            src={profileIcon}
            alt="imageLogo"
            onClick={() => sendLocation('perfil')}
          />
        </Link>
        <HeaderTitle data-testid="page-title">
          {capitalizeFirstLetter(title)}
        </HeaderTitle>
        {renderSearch()}
      </HeaderContainer>
      {displayInputShow && <HeaderSearch />}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sendLocation: (location) => dispatch(setAppLocation(location)),
});

const mapStateToProps = (state) => ({
  title: state.appReducers.location,
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  sendLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
