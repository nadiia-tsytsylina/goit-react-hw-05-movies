import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { getTrending } from 'services/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending()
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {movies && <MovieList movies={movies} path="movies/" />}
      {isLoading && <Loader />}
    </>
  );
};

export default Home;