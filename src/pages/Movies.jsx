import { lazy } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByName } from 'services/fetchAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    setMovies(null);

    getMoviesByName(query)
      .then(data => {
        if (data.results.length < 1) {
          setMovies(null);
          toast.error(`There are no movies with name ${query}`);
          setIsLoading(false);
          return;
        }
        setMovies(data.results);
        setIsLoading(false);
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
      {isLoading && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Movies;
