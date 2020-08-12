import PropTypes from 'prop-types';
import React from 'react';
import Lottie from 'react-lottie';
import animationData1 from '../../images/plate-animation.json';
import animationData2 from '../../images/burguer-animation.json';

import { LoadingContainer, LoadingText } from './StyledComponents';

const loadingTypes = [animationData1, animationData2];

const Loading = ({ loadingText = 'Carregando' }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingTypes[Math.floor(Math.random() * 2)],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height="333" width="333" />
      <LoadingText>{loadingText}</LoadingText>
    </LoadingContainer>
  );
};

Loading.propTypes = {
  loadingText: PropTypes.string,
};

Loading.defaultProps = {
  loadingText: 'Carregando',
};

export default Loading;
