import React from 'react'
import MovieData from './MovieData'


export default function Upcoming() {
    const URL_MOVIES_UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  return (
    <MovieData URL_MOVIES={URL_MOVIES_UPCOMING} title={'Upcoming'} />
  )
}