import React from 'react';
import copyToClipboard from 'clipboard-copy';
import ShareIcon from '../../images/shareIcon.svg';
// import FavoriteIcon from '../../images/blackHeartIcon.svg';
import NotFavoriteIcon from '../../images/whiteHeartIcon.svg';

/**
 * Styled components
 import { Social, SocialIcon } from './StyledComponents';
 */

const SocialMenu = () => {
  const handleclick = () => {
    copyToClipboard(window.location.href);
    document.getElementById('copyLink').innerHTML = 'Link copiado!';
  };
  return (
    <div>
      <input
        type="image"
        data-testid="share-btn"
        src={ShareIcon}
        alt="share botton"
        onClick={() => handleclick()}
      />
      <input type="image" data-testid="favorite-btn" src={NotFavoriteIcon} alt="favorite bottom" />
      <div id="copyLink" />
    </div>
  );
};

export default SocialMenu;
