import { useState, useEffect } from 'react';
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS';

const options = {
  method: 'GET',
  headers: {
    'accept': ACCEPT,
    'Authorization': AUTHORIZATION
  }
};

export default function useMovieFullDetails(movieId) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const URL_MOVIES = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const URL_CAST = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

    Promise.all([
      fetch(URL_MOVIES, options).then(res => res.json()),
      fetch(URL_CAST, options).then(res => res.json())
    ])
      .then(([movieData, castData]) => {
        setMovie(movieData);
        setCast(castData.cast);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [movieId]);

  return { movie, cast, loading, error };
}
