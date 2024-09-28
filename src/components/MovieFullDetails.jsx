import React, { useState, useEffect } from 'react'
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS'
import { Link } from 'react-router-dom'
import useMovieFullDetails from '../CustomHooks/useMovieFullDetails'

const options = {
    method: 'GET',
    headers: {
        'accept': ACCEPT,
        'Authorization': AUTHORIZATION
    }
}


export default function MovieFullDetails({ movieid }) {
    

    const { movie, cast, loading, error } = useMovieFullDetails(movieid)



    const URL_MOVIES = `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`;
    const URL_CAST = `https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`;

    useEffect(() => {
        Promise.all([
            fetch(URL_MOVIES, options).then(res => res.json()),
            fetch(URL_CAST, options).then(res => res.json())
        ])
            .then(([movieData, castData]) => {
                setMovie(movieData)
                setCast(castData.cast)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!movie) {
        return <div>No movie found</div>
    }



   

    return { productionCompanies, castlist, genres }

}

const styles = {
    
    productionCompanies: {
        marginTop: '20px'
    },
    companyList: {
        display: 'flex',
        overflowX: 'auto',
        gap: '20px'
    },
    companyItem: {
        flex: '0 0 auto',
        textAlign: 'center',
        width: '120px'
    },
    companyImage: {
        maxWidth: '100%',
        height: 'auto'
    },
    castContainer: {
        margin: '20px 0',
    },
    castGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
    },
    castCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
    },
    actorImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    actorName: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    characterName: {
        fontSize: '0.9em',
        color: '#666',
    },
   
}