import { useState } from 'react';
import { getMoviesByName } from 'services/fetchAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
// import { useParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  // const { searchParams } = useParams();

  // console.log(searchParams);

  const handleFormSubmit = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      getMoviesByName(newQuery)
        .then(data => {
          setMovies(data.results);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} path="" />}
    </>
  );
};

export default Movies;
