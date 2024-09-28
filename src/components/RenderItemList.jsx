import React from 'react'


const MovieItem = ({ item, handleMovieClick }) => {
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleMovieClick(item)
        }
    }

    return (
        <button 
            className="movie-item-content" 
            style={styles.movieImage} 
            onClick={() => handleMovieClick(item)}
            onKeyDown={handleKeyPress}
            aria-label={`View details for ${item.title}`}
        >
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} style={styles.image} alt={item.title} />
        </button>
    )
}

const MovieList = ({ data , handleMovieClick }) => (
    <div style={styles.container}>
        {data.map((item) => (
            <MovieItem key={item.id} item={item} handleMovieClick={handleMovieClick} />
        ))}
    </div>
)



export default function RenderItemList({ items, handleMovieClick }) {
    return (
            <MovieList data={items} handleMovieClick={handleMovieClick} />
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: '20px'
    },
    movieList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: '20px',
        border: '1px solid #ccc',
    },
    movieItem: {
        width: '300px',
        margin: '2%',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    },
    movieImage: {
        width: 'auto',
        height: 'auto',
        margin: '1rem',
        border: '1px solid #000',
        padding: '1rem',
    },
    image: {
        width: 'auto',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
    },
    movieTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    movieReleaseDate: {
        fontSize: '14px',
        color: '#888'
    },
    movieRating: {
        fontSize: '14px',
        color: '#888',
    }

}