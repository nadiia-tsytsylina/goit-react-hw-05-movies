import styled from '@emotion/styled';

export const AuthorName = styled('h4')`
  font-size: 20px;
  margin-bottom: 8px;
  //   text-align: center;
`;

export const ReviewText = styled('p')`
  margin-bottom: 16px;
`;

export const ReviewLink = styled('a')`
display: block;
width: 110px;
  border: 2px solid #31d0aa;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px 16px;
  color: #111111;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
  transition: 
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: #31d0aa;
`;

export const ReviewsNotFound = styled('h4')`
  margin-bottom: 16px;
  font-size: 20px;
  text-align: center;
`;
