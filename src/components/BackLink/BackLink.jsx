import { StyledLink } from 'components/BackLink/BackLink.styled';

const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default BackLink;
