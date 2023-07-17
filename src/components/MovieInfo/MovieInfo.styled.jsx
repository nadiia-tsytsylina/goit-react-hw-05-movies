import styled from '@emotion/styled';

export const MovieContainer = styled('div')`
  display: flex;
  gap: 24px;
  border: 2px solid #5fc3e4;
  border-radius: 12px;
  background: rgba(95, 195, 228, 0.2);
  padding: 24px;
`;

export const MoviePoster = styled('img')`
  height: 500px;
  border-radius: 12px;
`;
export const MovieTitle = styled('h2')`
  margin-bottom: 16px;
  color: #5fc3e4;
  font-size: 36px;
  text-shadow: 1px 1px 2px #293b4c;
`;

export const MovieText = styled('p')`
  margin-bottom: 12px;
  font-size: 24px;
  color: #293b4c;
`;

export const UserScoreTitle = styled('span')`
  color: #111111;
  font-weight: 600;
  margin-right: 8px;
  font-size: 28px;
`;

export const MovieSubtitle = styled('h3')`
  font-size: 28px;
  margin-bottom: 8px;
  color: #111111;
`;

export const Genre = styled('p')`
  font-size: 24px;
  color: #293b4c;
`;
