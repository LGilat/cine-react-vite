import React from 'react'
import MovieData from './MovieData'


export default function Playing() {
    const URL_MOVIES_NOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
  return (  
    <MovieData URL_MOVIES={URL_MOVIES_NOWPLAYING} title={'Now Playing'} />
  )

}
