import React from "react"
import { Link } from "react-router-dom"




const Genres = ({ movie }) => {
    if (!movie || !Array.isArray(movie.genres)) {
        return null;
    }

    return (
        <span style={styles.genres}>
            {movie.genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                    <Link
                        to={`/genre/${genre.id}`}
                        style={styles.genreLink}
                    >
                        {genre.name}
                    </Link>
                    {index < movie.genres.length - 1 && ', '}
                </React.Fragment>
            ))}
        </span>
    );
};

export default Genres

const styles = {
    genres: {
        marginBottom: '10px',
    },
    genreLink: {
        color: '#0066cc',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'underline',
        },
    },
}