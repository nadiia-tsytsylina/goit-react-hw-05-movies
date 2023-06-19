import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/fetchAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    getMoviesByName(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, [query]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && (
        <MovieList movies={movies} path="" state={{ from: location }} />
      )}
    </>
  );
};

export default Movies;
