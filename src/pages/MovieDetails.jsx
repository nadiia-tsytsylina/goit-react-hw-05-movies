import Loader from 'components/Loader/Loader';
import BackLink from 'components/BackLink/BackLink';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'services/fetchAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkRef.current}>Go back</BackLink>
      {movie && <MovieInfo movie={movie} />}
      {movie && <AdditionalInfo />}
      {isLoading && <Loader />}
    </>
  );
};

export default MovieDetails;
