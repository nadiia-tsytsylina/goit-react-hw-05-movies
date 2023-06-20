import { Outlet } from 'react-router-dom';
import { StyledLink, Navigation, Container } from './Layout.styled';

const Layout = () => {
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

export default Layout;
