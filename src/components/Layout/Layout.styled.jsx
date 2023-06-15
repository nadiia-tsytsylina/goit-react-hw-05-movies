import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #111111;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  &.active {
    color: #31d0aa;
  }
`;

export const Navigation = styled('nav')`
  display: flex;
  height: 60px;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 20px;
  background: #ffffff;
  border-bottom: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
