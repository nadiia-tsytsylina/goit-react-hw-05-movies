import styled from '@emotion/styled';

export const CastList = styled('ul')`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled('li')`
  display: flex;
  gap: 4px;
  flex-direction: column;
  width: 200px;
  padding-bottom: 8px;
  text-align: center;
  border: 2px solid #5fc3e4;
  border-radius: 12px;
  background: rgba(95, 195, 228, 0.2);
`;

export const ActorName = styled('h4')`
  font-size: 20px;
  padding: 0 4px;
`;
export const ActorCharacter = styled('p')`
  font-size: 16px;
  padding: 0 4px;
  color: #293b4c;
`;

export const ActorCharacterTitle = styled('span')`
  font-weight: 600;
`;

export const CastNotFound = styled('h4')`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #293b4c;
`;

export const CastImg = styled('img')`
  border-radius: 12px;
`;
