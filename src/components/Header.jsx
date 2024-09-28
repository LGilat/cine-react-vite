import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    padding: '10px',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '5px',
    marginRight: '10px',
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default function Header({ logoImage }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    navigate(`/search/${searchQuery}`);
    setSearchQuery('');
  };


  return (
    <header style={styles.header}>
      <img src={logoImage} alt="Logo" style={styles.logo} />
      <form onSubmit={handleSearch} style={styles.searchForm}>
        <input
          type="search"
          placeholder="Buscar películas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>Buscar</button>
      </form>
      <nav>
        <Link to="/" style={styles.link}>Now Playing</Link>
        <Link to="/upcoming" style={styles.link}>Upcoming</Link>
        <Link to="/top-rated" style={styles.link}>Top Rated</Link>
        <Link to="/popular" style={styles.link}>Popular</Link>
      </nav>
    </header>
  );
}