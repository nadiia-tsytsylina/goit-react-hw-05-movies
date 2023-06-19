import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'services/fetchAPI';
import BackLink from 'components/BackLink';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkRef.current}>Go back</BackLink>
      {movie && <MovieInfo movie={movie} />}
      {movie && <AdditionalInfo />}
    </>
  );
};

export default MovieDetails;
