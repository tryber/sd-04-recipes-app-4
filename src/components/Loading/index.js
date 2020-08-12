import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData1 from '../../images/plate-animation.json';
import animationData2 from '../../images/burguer-animation.json';
import animationData3 from '../../images/drink1-animation.json';
import animationData4 from '../../images/drink2-animation.json';

import { LoadingContainer, LoadingText } from './StyledComponents';

const loadingTypes = {
  comida: [animationData1, animationData2],
  bebida: [animationData3, animationData4],
};

const Loading = ({ loadingText = 'Carregando' }) => {
  const { location } = useHistory();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:
      loadingTypes[location.pathname.includes('comida') ? 'comida' : 'bebida'][Math.floor(Math.random() * 2)],
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
