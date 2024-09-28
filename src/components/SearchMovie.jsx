import React from 'react'
import { useParams } from 'react-router-dom';
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS';
import MovieData from './MovieData';


const options = {
    method: 'GET',
    headers: {
        accept: ACCEPT,
        Authorization: AUTHORIZATION,
    },
};




export default function SearchMovie() {
    const { query } = useParams();
    const URL_MOVIES = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

    return (
        <MovieData URL_MOVIES={URL_MOVIES} title={'Searching by ' + query} />
    );

}