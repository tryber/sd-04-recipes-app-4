import React from 'react';

const ExploreDrinks = ({ history }) => {
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/bebidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={() => history.push(`/explorar/bebidas/${'id-da-bebida'}`)} //  atenção
      >
        Me Supreenda!
      </button>
    </div>
  );
};

export default ExploreDrinks;
