import { useState, useEffect } from 'react';
import { getTrending } from 'services/fetchAPI';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return <>{movies && <MovieList movies={movies} path="movies/" />}</>;
};

export default Home;
