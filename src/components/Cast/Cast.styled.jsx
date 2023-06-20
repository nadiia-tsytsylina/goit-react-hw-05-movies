import styled from '@emotion/styled';

export const CastList = styled('ul')`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CastItem = styled('li')`
  width: 200px;
  text-align: center;
  align-self: flex-start;
`;

export const ActorName = styled('h4')`
  margin-bottom: 8px;
  font-size: 20px;
`;
export const ActorCharacter = styled('p')`
  margin-bottom: 4px;
  font-size: 16px;
`;

export const ActorCharacterTitle = styled('span')`
  font-weight: 600;
`;

export const CastNotFound = styled('h4')`
  margin-bottom: 16px;
  font-size: 20px;
  text-align: center;
`;
