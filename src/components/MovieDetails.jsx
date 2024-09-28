import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ACCEPT, AUTHORIZATION } from '../consts/CONSTS';
import useMovieFullDetails from '../CustomHooks/useMovieFullDetails'
import Genres from './details/Genres';
import Companies from './details/Companies';
import Reparto from './details/Reparto';


const options = {
    method: 'GET',
    headers: {
      accept: ACCEPT,
      Authorization: AUTHORIZATION,
    },
  };


const MovieDetails = () => {
    
    const navigate = useNavigate();
    const { id } = useParams();;
    const { movie, cast, loading, error } = useMovieFullDetails(id)
  

      if (loading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      if (!movie) {
        return <div>No movie found with ID: {id}</div>;
      }

      const handleGoBack = () => {
        navigate(-1);
      };
    
    return (
        <>
            <div className="movie-details" style={styles.containerMovieDetails}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={styles.movieImage} />
                <div style={styles.movieDetailsData}>
                    <h1>{movie.title}</h1>
                    <p> <span style={styles.textDate}>{movie.release_date} </span> { <Genres movie={movie} />   } </p>
                    <p style={styles.circleAverage} > {movie.vote_average.toFixed(1)}</p>
                    <p>Popularidad: {movie.popularity}</p>
                    <p>Nº votos: { movie.vote_count} </p>
                    <p style={styles.sipnosis} >Sinopsis: {movie.overview}</p>
                    {<Companies companies={movie.production_companies} /> || <div></div>}
                     <Link to={`/movie/${movie.id}/reviews`} style={styles.linkComentarios} > Ver comentarios </Link> 
                </div>
            </div>
            {<Reparto cast={cast} /> || <div></div>}
            <button     
                style={styles.button}
                onClick={handleGoBack}
                aria-label="Volver"
                >
                Volver
            </button>
        </>
    );
};

export default MovieDetails;

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
        padding:'0',
        margin: '0',
    }, 
    movieImage: {
        maxWidth: '40%',
        maxHeight: '480px',
        objectFit: 'cover',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    sipnosis: {
        marginTop: '10px',
        fontSize: '12px',
        lineHeight: '1.5',
        textAlign: 'justify',
        maxWidth: '70%',
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
    circleAverage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px',
        height: '50px',
        backgroundColor: '#FF8C00',
        color: '#fff',
        borderRadius: '50%',
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    textDate: {
        fontSize: '12px',
        fontWeight: 'lighter',
        color: '#888',
        marginRight: '10px',
    },
    linkComentarios: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
        marginTop: '20px',
    }
}
