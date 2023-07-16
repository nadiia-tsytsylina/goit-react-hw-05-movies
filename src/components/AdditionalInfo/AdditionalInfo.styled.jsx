import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AdditionalTitle = styled('h3')`
  color: #5fc3e4;
  font-size: 32px;
  text-shadow: 1px 1px 2px #293b4c;
  margin-bottom: 16px;
  margin-top: 16px;
  text-align: center;
`;

export const AdditionalList = styled('ul')`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
`;

export const AdditionalLink = styled(NavLink)`
  color: #111111;
  display: block;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-block;
  outline: none;
  vertical-align: bottom;
  text-decoration: none;
  white-space: nowrap;
  color: #293b4c;
  font-weight: 500;
  transition: color 0.3s;

  &.active {
    color: #5fc3e4;
  }

  &:hover,
  :focus {
    color: #5fc3e4;
  }

  &::before,
  ::after {
    box-sizing: border-box;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: rgba(95, 195, 228, 1);
    content: '';
    opacity: 0;
    transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
    transform: scale(1.1);
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }

  &:hover::before,
  :focus::before {
    background-color: rgba(95, 195, 228, 0);
    opacity: 1;
    transform: scaleX(1) scaleY(0.618);
  }
`;
