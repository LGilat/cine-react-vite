
import React from 'react'
import { Link } from 'react-router-dom';


const Reparto =({ cast }) => (
    <div style={styles.castContainer}>
        <h2>Cast</h2>
        <div style={styles.castGrid}>
            {cast?.map(actor => (
                <div key={actor.id} style={styles.castCard}>
                    {actor.profile_path && <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={styles.movieImage} />}
                    {!actor.profile_path && <img src="https://via.placeholder.com/150" alt={actor.name} style={styles.movieImage} />}
                    <Link to={`/actor/${actor.id}`} key={actor.id} style={styles.actorName}>
                        <p style={styles.actorName}>{actor.name}</p>
                    </Link>
                    <p style={styles.characterName}>{actor.character}</p>
                </div>
            ))}
        </div>
    </div>
)

export default Reparto

const styles = {
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
    movieImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginRight: '10px',
    },
}
