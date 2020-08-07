import React from 'react';
import BottomMenu from '../../components/BottomMenu';
import Header from '../../components/Header/Header';

const Explore = ({ history }) => {
  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-foods"
        onClick={() => history.push('/explorar/bebidas')}
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={() => history.push('/explorar/bebidas')}
      >
        Explorar Bebidas
      </button>
      <BottomMenu />
    </div>
  );
};

export default Explore;
