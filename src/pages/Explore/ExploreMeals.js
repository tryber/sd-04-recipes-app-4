import React from 'react';

const ExploreMeals = ({ history }) => {
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={() => history.push('/explorar/comidas/ingredientes')}
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-by-area"
        onClick={() => history.push('/explorar/comidas/area')}
      >
        Por Area
      </button>
      <button
        type="button"
        data-testid="explore-suprise"
        onClick={() => history.push(`/comidas/${'id-da-comida'}`)}//  atenção
      >
        Me Supreenda!
      </button>
    </div>
  );
};

export default ExploreMeals;
