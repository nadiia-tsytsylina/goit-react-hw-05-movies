import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AdditionalTitle = styled('h3')`
  font-size: 24px;
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
  font-size: 16px;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #31d0aa;
  }
  &:hover {
    color: #31d0aa;
  }
`;
