import React from 'react';
import { connect } from 'react-redux';
import { setAppLocation } from '../../actions/appActions';

import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header/Header';

const Explore = ({ history, appLocation }) => {
  const handleExplore = (type, location) => {
    appLocation(type);
    history.push(location);
  };

  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-food"
        onClick={() => handleExplore('Explorar Comidas', '/explorar/comidas')}
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={() => handleExplore('Explorar Bebidas', '/explorar/bebidas')}
      >
        Explorar Bebidas
      </button>
      <BottomMenu />
    </div>
  );
};

const mapDispathToProps = (dispatch) => ({
  appLocation: (location) => dispatch(setAppLocation(location)),
});

export default connect(null, mapDispathToProps)(Explore);
