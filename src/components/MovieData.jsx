import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import RenderItemList from './RenderItemList'
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS'   


const options = {
    method: 'GET',
    headers: {
        'accept': ACCEPT,
        'Authorization': AUTHORIZATION
    }
}

export default function MovieData({URL_MOVIES, title}) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    

    const navigate = useNavigate();

    useEffect(() => {
        
        fetch(URL_MOVIES, options)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
            
    }, [URL_MOVIES])

    const handleMovieClick = (movie) => {
         // Navegar a la página de detalles de la película
            navigate(`/movie/${movie.id}`);
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


    return (
        <div>
            <h1>{ title }</h1>
            <RenderItemList items={movies} handleMovieClick={handleMovieClick} />
        </div>
    )

}

