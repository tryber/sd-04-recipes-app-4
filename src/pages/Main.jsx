import React, { Component } from 'react';
import { connect } from 'react-redux';
import Meals from './Meals';
import Drinks from './Drinks';

const Main = () => {
  return (
    <div>
      <Meals />
      <Drinks />
    </div>
  );
}

export default Main;