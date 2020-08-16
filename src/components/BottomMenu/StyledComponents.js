/**
 * BottomMenu Styled Components
 *
 * This contains all the styled compoents for the BottomMenu component.
 */
import styled from 'styled-components';

export const Menu = styled.div`
  align-items: center;
  background-color: #f6f6f6;
  bottom: 0;
  display: flex;
  flex-flow: row;
  height: 65px;
  justify-content: center;
  left: 0;
  padding-bottom: 8px;
  padding-top: 8px;
  position: fixed;
  width: 100%;
  z-index: 999;
  font-size: 1.3em;
  line-height: 18px;
  `;

export const MenuItem = styled.div`
  align-items: center;
  color: ${(props) => (props.isSelected ? '#8d29b3' : '#161616')};
  display: flex;
  flex-flow: column;
  flex: 1;
  font-weight: 800;
  font-size: 18px;
  justify-content: center;
  user-select: none;
  transition: all 3s ease-out;
`;

export const MenuIcon = styled.div`
  background-color: ${(props) => (props.isSelected ? '#8d29b3' : '#161616')};
  height: 28px;
  width: 28px;
  margin-bottom: 2px;
  mask: url(${(props) => props.src}) no-repeat center;
  mask-size: contain;
`;
