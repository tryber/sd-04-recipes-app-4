import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  flex-flow: column;
  width: 100%;
`;

export const LoadingText = styled.h1`
  font-size: 2.3em;
  font-weight: 800;
  color: #5e6cfb;
`;
