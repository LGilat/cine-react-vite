import React from 'react';
import MovieData from './MovieData';



export default function Popular() {
    const URL_MOVIES_POPULAR = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    return (
        <MovieData URL_MOVIES={URL_MOVIES_POPULAR} title={'Popular'} />
    );
}