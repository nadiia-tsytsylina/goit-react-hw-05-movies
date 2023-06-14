import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/fetchAPI';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.cast_id}>
                <h4>{actor.original_name}</h4>
                {actor.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.original_name}
                  ></img>
                )}
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
