import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/fetchAPI';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {movies && (
        <>
          {movies.map(movie => {
            return (
              <Link key={movie.id} to={`movies/${movie.id}`}>
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
        </>
      )}
    </div>
  );
};

export default Home;
