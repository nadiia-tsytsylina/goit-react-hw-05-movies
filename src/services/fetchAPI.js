import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTZlYWZhMmEzOTE3ZDU3ZGQzMGRhOTZhOWQxOTg5MCIsInN1YiI6IjY0ODgzZjcyZTI3MjYwMDBjOTMyMjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XdPSLtTSAZv4fw0M0gYehYEL9mjnuAiltEwvVoL-DaE',
  },
};

export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  const data = response.data;
  return data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, options);
  const data = response.data;
  return data;
};

// search movie by name
// fetch(
//   'https://api.themoviedb.org/3/search/movie?query={name}&page=1',
//   options
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// get details by movie Id
//api.themoviedb.org/3/movie/{movie_id}

// get cast by movie id
//api.themoviedb.org/3/movie/{movie_id}/credits

// get reviews by movie Id
//api.themoviedb.org/3/movie/{movie_id}/reviews
