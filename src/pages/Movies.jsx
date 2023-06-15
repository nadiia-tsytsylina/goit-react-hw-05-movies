import { useState } from 'react';
import { getMoviesByName } from 'services/fetchAPI';
import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  MovieGallery,
  MovieTitle,
  MoviePoster,
  MovieLink,
} from 'components/Movies.styled';
import defaultImage from 'images/defaultImage.jpg';

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
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          value={query}
          onChange={handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
      {movies && (
        <MovieGallery>
          {movies.map(movie => {
            return (
              <MovieLink key={movie.id} to={`${movie.id}`}>
                <MovieTitle>{movie.title}</MovieTitle>
                {movie.poster_path ? (
                  <MoviePoster
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <MoviePoster src={defaultImage} alt={movie.title} />
                )}
              </MovieLink>
            );
          })}
        </MovieGallery>
      )}
    </>
  );
};

export default Movies;
