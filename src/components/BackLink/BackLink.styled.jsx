import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: block;
width: 110px;
  border: 2px solid #31d0aa;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px 16px;
  color: #111111;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  transition: 
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: #31d0aa;
`;
