import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
padding: 0 4px;
display: inline-flex;
align-items: center;
  border: 2px solid #293b4c;
  border-radius: 12px;
  color: #293b4c;
  font-size: 36px;
  margin-bottom: 16px;
  transition: 
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
     transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
     border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #5fc3e4;
    transform: scale(1.2);
    border: 2px solid #5fc3e4;
`;
