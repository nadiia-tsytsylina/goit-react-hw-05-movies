import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/fetchAPI';
import { BackLink } from 'components/BackLink';
import {
  MovieContainer,
  MoviePoster,
  MovieTitle,
  MovieText,
  UserScoreTitle,
  MovieSubtitle,
  Genre,
  AdditionalTitle,
  AdditionalList,
  AdditionalLink,
} from 'components/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <MovieContainer>
        <BackLink to={backLinkHref}>Back</BackLink>
        {movie && (
          <>
            {movie.poster_path && (
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieText>
                <UserScoreTitle>User score:</UserScoreTitle>
                {movie.vote_average}
              </MovieText>
              <MovieSubtitle>Overview:</MovieSubtitle>
              <MovieText>{movie.overview}</MovieText>
              <MovieSubtitle>Genres</MovieSubtitle>
              {movie &&
                movie.genres.map(genre => {
                  return <Genre key={genre.id}>{genre.name}</Genre>;
                })}
            </div>
          </>
        )}
      </MovieContainer>

      <div>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AdditionalList>
          <li>
            <AdditionalLink to="cast">Cast</AdditionalLink>
          </li>
          <li>
            <AdditionalLink to="reviews">Reviews</AdditionalLink>
          </li>
        </AdditionalList>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
