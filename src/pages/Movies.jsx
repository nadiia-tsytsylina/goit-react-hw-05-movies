import { useState } from 'react';
import { getMoviesByName } from 'services/fetchAPI';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      console.log('Please input tag for searching images');
      return;
    }
    getMoviesByName(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <Link key={movie.id} to={`${movie.id}`}>
                <p>{movie.title}</p>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </Link>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
