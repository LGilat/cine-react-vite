import React from 'react'
import MovieData from './MovieData'




export default function TopRated() {
    const URL_MOVIES_TOPRATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  return (
    <MovieData URL_MOVIES={URL_MOVIES_TOPRATED} title={'Top Rated'} />
  )
}