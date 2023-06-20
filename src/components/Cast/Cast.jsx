import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast, getMovieDetails } from 'services/fetchAPI';
import defaultImage from 'images/defaultImage.jpg';
import {
  CastList,
  CastItem,
  ActorName,
  ActorCharacter,
  ActorCharacterTitle,
  CastNotFound,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [movieTitle, setMovieTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (!movieId) {
      return;
    }

    getMovieCast(movieId)
      .then(data => {
        if (data.cast.length < 1) {
          setCast(null);
          setIsLoading(false);
          return;
        }
        setCast(data.cast);
        setIsLoading(false);
      })
      .catch(err => console.error(err));

    getMovieDetails(movieId)
      .then(data => {
        setMovieTitle(data.title);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {cast ? (
        <CastList>
          {cast.map(actor => {
            return (
              <CastItem key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.original_name}
                  ></img>
                ) : (
                  <img src={defaultImage} alt={actor.original_name}></img>
                )}
                <ActorName>{actor.original_name}</ActorName>
                <ActorCharacter>
                  <ActorCharacterTitle>Character:</ActorCharacterTitle>
                  {actor.character}
                </ActorCharacter>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <CastNotFound>
          We don't have any information about cast of movie "{movieTitle}"
        </CastNotFound>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
