/**
 *
 * BottomMenu
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAppLocation } from '../../actions/appActions';
import DrinkIcon from '../../images/drinkIcon.svg';
import ExploreIcon from '../../images/exploreIcon.svg';
import MealIcon from '../../images/mealIcon.svg';

/** In use styled coponents */
import { Menu, MenuItem, MenuIcon } from './StyledComponents';

/** menus */
const menus = [
  { appLocation: 'comidas', text: 'Comidas', icon: MealIcon, testId: 'drinks-bottom-btn' },
  { appLocation: 'bebidas', text: 'Bebidas', icon: DrinkIcon, testId: 'meals-bottom-btn' },
  { appLocation: 'explorar', text: 'Explorar', icon: ExploreIcon, testId: 'explore-bottom-btn' },
];

const BottomMenu = ({ changeAppLocation, appLocation }) => {
  const history = useHistory();

  const handleLocationChange = (location) => {
    changeAppLocation(location);
    history.push(`/${location}`);
  };

  return (
    <Menu data-testid="footer">
      {menus.map((menu) => (
        <MenuItem
          isSelected={appLocation === menu.appLocation ? true : false}
          onClick={() => handleLocationChange(menu.appLocation)}
        >
          <MenuIcon
            src={menu.icon}
            data-testid={menu.testId}
            isSelected={appLocation === menu.appLocation ? true : false}
          />
          <span>{menu.text}</span>
        </MenuItem>
      ))}
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  changeAppLocation: (location) => dispatch(setAppLocation(location)),
});

BottomMenu.propTypes = {
  appLocation: PropTypes.string.isRequired,
  changeAppLocation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);
