import { Routes, Route } from 'react-router-dom';
import { StyledLink } from './App.styled';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<div>Movie cast</div>} />
        <Route
          path="/movies/:movieId/reviews"
          element={<div>Movie reviews</div>}
        />
      </Routes>
    </div>
  );
};
