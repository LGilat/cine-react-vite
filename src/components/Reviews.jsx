import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS'


const options = {
    method: 'GET',
    headers: {
        accept: ACCEPT,
        Authorization: AUTHORIZATION,
    },
};



export default function Reviews() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const URL_MOVIE = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const URL_REVIEWS = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
        Promise.all([
            fetch(URL_REVIEWS, options).then(res => res.json()),
            fetch(URL_MOVIE, options).then(res => res.json()),

        ])
            .then(([reviewsData, movieData]) => {
                setMovie(movieData);
                setReviews(reviewsData.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <div>Loading...</div>;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    };

    return (
        <>
            <div className="movie-details" style={styles.containerMovieDetails}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={styles.movieImage} />
                <div style={styles.movieDetailsData}>
                    <h1>{movie.title}</h1>
                    <p> <span style={styles.textDate}>{movie.release_date} </span> </p>
                    <p style={styles.circleAverage} > {movie.vote_average.toFixed(1)}</p>
                    <p>Popularidad: {movie.popularity}</p>
                    <p>Nº votos: {movie.vote_count} </p>
                </div>
                <button
                    style={styles.button}
                    onClick={handleGoBack}
                    aria-label="Volver"
                >
                    Volver
                </button>
            </div>
            <div style={styles.reviewsContainer}>
                <h2>Reviews</h2>
                {reviews?.map((review, index) => (
                    <div key={review.id} style={styles.review}>
                        <div style={styles.reviewHeader} > 
                            { review.author_details.avatar_path && 
                                <img src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`} 
                                    alt={review.username} 
                                    style={styles.circleAverage} 
                                />
                            }
                            {
                                !review.author_details.avatar_path &&
                                <img src="https://via.placeholder.com/150" alt={review.username} style={styles.circleAverage} />
                            }
                            <p style={styles.textAuthor}>{review.author}</p>
                            <p style={styles.textDate}>{review.created_at}</p>
                        </div>
                        <p style={styles.textContentReview}>{review.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

const styles = {
    containerMovieDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
    },
    movieDetailsData: {
        flex: 1,
        maxWidth: '50%',
        textAlign: 'left',
        padding: '0',
        margin: '0',
    },
    movieImage: {
        maxWidth: '40%',
        maxHeight: '480px',
        objectFit: 'cover',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    reviewHeader: {
        display: 'grid',
        gridTemplateColumns: 'auto auto 1fr',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '10px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
    },
    textDate: {
        fontSize: '12px',
        fontWeight: 'light',
        alignItems: 'center',
        color: '#000',
        marginRight: '10px',
    },
    reviewsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    review: {
        width: '60%',
        marginBottom: '20px',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    textContentReview: {
        fontSize: '12px',
        lineHeight: '1.5',
        marginTop: '10px',
        textAlign: 'justify',
    },
    circleAverage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border:  '3px solid rgb(255, 140, 0)',
        backgroundColor: '#ffffff',
        color: '#007C0f',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    textAuthor: {
        fontSize: '12px',
        fontWeight: 'light',
        alignItems: 'center',
        color: '#000',
        marginRight: '10px',
    }
}