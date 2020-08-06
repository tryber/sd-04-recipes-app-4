/**
 * BottomMenu Styled Components
 *
 * This contains all the styled compoents for the BottomMenu component.
 */
import styled from 'styled-components';

export const Menu = styled.div`
  align-items: center;
  background-color: #202124;
  bottom: 0;
  display: flex;
  flex-flow: row;
  height: 60px;
  justify-content: center;
  left: 0;
  padding-bottom: 12px;
  padding-top: 8px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const MenuItem = styled.div`
  align-items: center;
  color: ${(props) => (props.isSelected ? '#5aaf50' : '#fff')};
  display: flex;
  flex-flow: column;
  flex: 1;
  font-weight: 800;
  justify-content: center;
  max-width: 168 dp;
  transition: color 0.7s;
  user-select: none;
`;

export const MenuIcon = styled.img`
  fill: green;
  height: 28px;
  width: 28px;
`;

export const AssistantIcon = styled.img`
  margin-bottom: 3px;
  width: 28px;
`;
