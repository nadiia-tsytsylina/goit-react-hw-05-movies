import {
  MovieGallery,
  MovieTitle,
  MoviePoster,
  MovieLink,
} from 'components/Movies.styled';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <MovieGallery>
      {movies && (
        <>
          {movies.map(movie => {
            return (
              <MovieLink key={movie.id} to={`movies/${movie.id}`}>
                <MovieTitle>{movie.title}</MovieTitle>
                {movie.poster_path && (
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </MovieLink>
            );
          })}
        </>
      )}
    </MovieGallery>
  );
};

export default Home;
