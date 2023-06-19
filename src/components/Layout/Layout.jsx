import { StyledLink, Navigation, Container } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Navigation>
        <Container>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Container>
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
