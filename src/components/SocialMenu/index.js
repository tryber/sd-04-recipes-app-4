import React from 'react';
import ShareIcon from '../../images/shareIcon.svg';
import FavoriteIcon from '../../images/blackHeartIcon.svg';
import NotFavoriteIcon from '../../images/whiteHeartIcon.svg';


/**
 * Styled components
 */
import { Social, SocialIcon } from './StyledComponents';

const SocialMenu = () => {
  return (
    <Social>
      <SocialIcon data-testid="share-btn" src={ShareIcon} />
      <SocialIcon data-testid="favorite-btn" src={NotFavoriteIcon} />
    </Social>
  );
};
export default SocialMenu;
