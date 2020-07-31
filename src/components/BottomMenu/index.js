/**
 *
 * BottomMenu
 *
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

/**
 *
 * No bottom menu routes
 *
 */
const noMenuRoutes = [
  'comidas/',
  'bebidas/',
  '/in-progress',
  '/receitas-favoritas',
  '/ingredients',
];

const BottomMenu = ({ changeAppLocation, appLocation }) => {
  const history = useHistory();
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const { pathname } = history.location;
    const displayStatus = noMenuRoutes.find((route) => pathname.includes(route));

    if (!displayStatus) setIsDisplayed(true);
  }, []);

  const handleLocationChange = (location) => {
    changeAppLocation(location);
    history.push(`/${location}`);
  };

  if (isDisplayed) {
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
  }

  return null;
};

const mapStateToProps = (state) => ({
  appLocation: state.appReducers.location,
});

const mapDispatchToProps = (dispatch) => ({
  changeAppLocation: (location) => dispatch(setAppLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);
