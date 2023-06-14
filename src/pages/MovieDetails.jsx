import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/fetchAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average}</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {movie &&
            movie.genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
