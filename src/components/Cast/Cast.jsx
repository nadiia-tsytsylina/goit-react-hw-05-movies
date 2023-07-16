import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/fetchAPI';
import defaultActor from 'images/defaultActor.png';
import {
  CastList,
  CastItem,
  ActorName,
  ActorCharacter,
  ActorCharacterTitle,
  CastNotFound,
  CastImg,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
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
  }, [movieId]);

  return (
    <>
      {cast ? (
        <CastList>
          {cast.map(actor => {
            return (
              <CastItem key={actor.cast_id}>
                {actor.profile_path ? (
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.original_name}
                  ></CastImg>
                ) : (
                  <CastImg
                    src={defaultActor}
                    alt={actor.original_name}
                  ></CastImg>
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
          We don't have any information about cast of this movie
        </CastNotFound>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
