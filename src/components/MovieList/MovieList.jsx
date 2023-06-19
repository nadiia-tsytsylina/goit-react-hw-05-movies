import {
  MovieGallery,
  MovieTitle,
  MoviePoster,
  MovieLink,
} from 'components/MovieList/MovieList.styled';
import { useLocation } from 'react-router-dom';
import defaultImage from 'images/defaultImage.jpg';

const MovieList = ({ movies, path }) => {
  const location = useLocation();
  return (
    <MovieGallery>
      {movies.map(movie => {
        return (
          <MovieLink
            key={movie.id}
            to={`${path}${movie.id}`}
            state={{ from: location }}
          >
            <MovieTitle>{movie.title}</MovieTitle>
            {movie.poster_path ? (
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <MoviePoster src={defaultImage} alt={movie.title} />
            )}
          </MovieLink>
        );
      })}
    </MovieGallery>
  );
};

export default MovieList;
