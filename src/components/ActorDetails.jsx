import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS'
import ActorItemsDetails from './ActorItemsDetails'
import ActorFilmography from './ActorFilmography'


const options = {
    method: 'GET',
    headers: {
        'accept': ACCEPT,
        'Authorization': AUTHORIZATION
    }
}



export default function ActorDetails() {
    let { id } = useParams()
    const navigate = useNavigate();
    const URL_ACTOR = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
    const [actor, setActor] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(URL_ACTOR, options)
            .then(res => res.json())
            .then(data => {
                setActor(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching actor data:', error);
                setError(error);
                setLoading(false);

            });
    }, [id]);


    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div style={styles.container}>
                <ActorItemsDetails actor={actor} />
                <button onClick={handleGoBack} style={styles.backButton}>
                    Volver
                </button>
            </div>
            <ActorFilmography />
        </>
    )
}


const styles = {
    container: {
        padding: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    backButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#f0f0f0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px',
        margin: 'auto 90%'
    }
};