import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #111111;
  padding: 20px 0;
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

export const Navigation = styled('nav')`
  display: flex;
  height: 80px;
  gap: 20px;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #5fc3e4;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  position: relative;
  z-index: 1;
  backface-visibility: hidden;
`;

export const Container = styled('div')`
  padding: 40px 24px;
`;
