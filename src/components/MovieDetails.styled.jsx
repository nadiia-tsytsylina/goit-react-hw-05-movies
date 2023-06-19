import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieContainer = styled('div')`
  display: flex;
  gap: 24px;
`;

export const MoviePoster = styled('img')`
  height: 500px;
`;
export const MovieTitle = styled('h2')`
  margin-bottom: 16px;
  color: #31d0aa;
  font-size: 32px;
`;

export const MovieText = styled('p')`
  margin-bottom: 12px;
  font-size: 20px;
`;

export const UserScoreTitle = styled('span')`
  font-weight: 600;
`;

export const MovieSubtitle = styled('h3')`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Genre = styled('p')`
  font-size: 20px;
`;

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

  &.active {
    color: #31d0aa;
  }
`;
