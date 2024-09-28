import React from 'react'
import { useParams } from 'react-router-dom'
import MovieData from './MovieData'

function GenreMovies() {
  let { id } = useParams()
  let URL_MOVIES_BYGENRE = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;
  return (
     <MovieData URL_MOVIES={URL_MOVIES_BYGENRE} title={'Movies by genrer'} key={id} />
  )
}
export default GenreMovies
