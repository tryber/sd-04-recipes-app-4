import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import HeaderSearch from './HeaderSearch';
import './header.css';
import { setAppLocation } from '../../actions/appActions';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const checkAppLocation = (path, appLocation, locationChanger) => {
  if (path.includes(appLocation)) return true;
  locationChanger(path);
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
    if (title === 'comidas' || title === 'bebidas') {
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
      <div className="containerHeader">
        <Link to="/perfil">
          <input
            type="image"
            data-testid="profile-top-btn"
            src={profileIcon}
            alt="imageLogo"
            onClick={() => sendLocation('perfil')}
          />
        </Link>
        <h1 className="header-title" data-testid="page-title">
          {capitalizeFirstLetter(title)}
        </h1>
        {renderSearch()}
      </div>
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
