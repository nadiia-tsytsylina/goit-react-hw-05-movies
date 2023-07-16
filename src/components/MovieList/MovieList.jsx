import { Link, useLocation } from 'react-router-dom';
import defaultMovie from 'images/defaultMovie.png';

import css from './MovieList.module.css';

const MovieList = ({ movies, path }) => {
  const location = useLocation();
  return (
    <ul className={css.MovieGallery}>
      {movies.map(movie => {
        return (
          <li className={css.MovieItem} key={movie.id}>
            <figure className={css.MovieFigure}>
              <Link to={`${path}${movie.id}`} state={{ from: location }}>
                {movie.poster_path ? (
                  <img
                    className={css.MovieImg}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    className={css.MovieImg}
                    src={defaultMovie}
                    alt={movie.title}
                  />
                )}
                <figcaption className={css.MovieFigcaption}>
                  <h3 className={css.MovieTitle}>{movie.title}</h3>
                </figcaption>
              </Link>
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
