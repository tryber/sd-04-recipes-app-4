import styled from 'styled-components';

export const Carroussel = styled.div`
  display: flex;
  height: 130px;
  overflow: hidden;
  position: relative;
  transition: all 2s linear;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: felx;
  flex-flow: row;
  left: ${(props) => props.position};
  position: absolute;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  height: 120px;
  margin-left: 5px;
  margin-right: 20px;
  min-width: 140px;
  transition: all 2s linear;
`;
