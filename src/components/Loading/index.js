import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../images/plate-animation.json';
import { LoadingContainer, LoadingText } from './StyledComponents';
// import './loading.css';

const Loading = ({ loadingText = 'Carregando' }) => {
  const [animationWidth, setAnimationWidth] = useState(333);
  const [animationHeight, setAnimationHeight] = useState(333);

  // useEffect(() => {
  //   if (window.innerWidth > 800) {
  //     setAnimationHeight(500);
  //     setAnimationWidth(500);
  //   }
  // }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingContainer>
      <Lottie options={defaultOptions} height={animationHeight} width={animationWidth} />
      <LoadingText>
        {loadingText}
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
