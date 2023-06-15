import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/fetchAPI';
import {
  CastList,
  CastItem,
  ActorName,
  ActorCharacter,
  ActorCharacterTitle,
} from './Cast.styled';
import defaultImage from 'images/defaultImage.jpg';

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
    <>
      {cast && (
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
                  <ActorCharacterTitle>Character:</ActorCharacterTitle>{' '}
                  {actor.character}
                </ActorCharacter>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </>
  );
};

export default Cast;
