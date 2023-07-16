import styled from '@emotion/styled';

export const ReviewItem = styled('li')`
  border: 2px solid #5fc3e4;
  border-radius: 12px;
  padding: 8px 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AuthorName = styled('h4')`
  font-size: 24px;
`;

export const ReviewText = styled('p')`
  font-size: 20px;
  color: #293b4c;
`;

export const ReviewLink = styled('a')`
display: block;
width: 130px;
  border: 2px solid #293b4c;
  border-radius: 12px;
  padding: 8px 16px;
  color: #293b4c;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  transition: 
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
     transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
     border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #5fc3e4;
    transform: scale(1.1);
    border: 2px solid #5fc3e4;
`;

export const ReviewsNotFound = styled('h4')`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #293b4c;
`;
