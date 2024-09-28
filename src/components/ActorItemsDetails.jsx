import React from 'react';

const ActorItemsDetails = ({ actor }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
          alt={actor.name} 
          style={styles.image}
        />
      </div>
      <div style={styles.infoContainer}>
        <h1 style={styles.name}>{actor.name}</h1>
        <p style={styles.birthInfo}>
          Nacimiento: {actor.birthday} en {actor.place_of_birth}
        </p>
        {actor.deathday && (
          <p style={styles.deathInfo}>Fallecimiento: {actor.deathday}</p>
        )}
        <h3>Biografía</h3>
        <p style={styles.biography}>{actor.biography || 'Biografía no encontrada en la base de datos'}</p>
       
        <p>Popularidad: {actor.popularity}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  imageContainer: {
    flex: '0 0 300px',
    marginRight: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: '2em',
    marginBottom: '10px',
  },
  birthInfo: {
    fontStyle: 'italic',
  },
  deathInfo: {
    fontStyle: 'italic',
    color: '#777',
  },
  biography: {
    lineHeight: '1.6',
  },
  aliasList: {
    columns: 2,
  },
};

export default ActorItemsDetails;
