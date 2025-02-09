import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS';
import './ActorFilmography.css';

const options = {
    method: 'GET',
    headers: {
        'accept': ACCEPT,
        'Authorization': AUTHORIZATION
    }
}


export default function ActorFilmography() {
    const { id } = useParams();
    const [actorFilmography, setActorFilmography] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                setActorFilmography(data.cast);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="filmography-container">
            <h2 className="title-filmografia">Filmography</h2>
            <table className="filmography-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Character</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {actorFilmography.map((movie) => (
                        <tr key={movie.id}>
                            <td> <Link to={`/movie/${movie.id}`}>{movie.title}</Link></td>
                            <td>{movie.character || 'Desconocido'}</td>
                            <td>{new Date(movie.release_date).getFullYear() || 'desconocido'}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total de películas: {actorFilmography.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

