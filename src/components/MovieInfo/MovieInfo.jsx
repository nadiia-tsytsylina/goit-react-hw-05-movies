import defaultImage from 'images/defaultImage.jpg';
import {
  MovieContainer,
  MoviePoster,
  MovieTitle,
  MovieText,
  UserScoreTitle,
  MovieSubtitle,
  Genre,
} from 'components/MovieInfo/MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  return (
    <MovieContainer>
      {movie.poster_path ? (
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <MoviePoster src={defaultImage} alt={movie.title} />
      )}
      <div>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieText>
          <UserScoreTitle>User score:</UserScoreTitle>
          {movie.vote_average}
        </MovieText>
        <MovieSubtitle>Overview:</MovieSubtitle>
        <MovieText>{movie.overview}</MovieText>
        <MovieSubtitle>Genres</MovieSubtitle>
        {movie.genres.map(genre => {
          return <Genre key={genre.id}>{genre.name}</Genre>;
        })}
      </div>
    </MovieContainer>
  );
};

export default MovieInfo;
