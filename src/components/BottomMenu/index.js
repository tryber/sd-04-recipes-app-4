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

/**
 *
 * In use styled coponents
 *
 */
import { Menu, MenuItem, MenuIcon } from './StyledComponents';

/**
 *
 * Bottom Menus
 *
 */
const menus = [
  { location: 'comidas', icon: MealIcon },
  { location: 'bebidas', icon: DrinkIcon },
  { location: 'explorar', icon: ExploreIcon },
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
          isSelected={appLocation === menu.location && true}
          onClick={() => handleLocationChange(menu.location)}
        >
          <MenuIcon src={menu.icon} />
          <span>{menu.location}</span>
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
