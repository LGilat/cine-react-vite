import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Center horizontally
  },
  logo: {
    height: '50px',
    width: 'auto',
    marginBottom: '10px', // Add some spacing below the logo
  },
  searchContainer: { // New style for the search area
    display: 'flex',
    width: '100%', // Make search fill the width
    marginBottom: '10px', // Space between search and links
  },
  searchForm: {
    display: 'flex',
    flexGrow: 1, // Allow search input to grow
    alignItems: 'center',
    width:'100%'
  },
  searchInput: {
    padding: '5px',
    flexGrow: 1, // Allow input to expand
    marginRight: '10px',
    width:'100%'
  },
  searchButton: {
    padding: '5px 10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column', // Stack links vertically
    alignItems: 'center', // Center links horizontally
    width: '100%', // Occupy full width
    marginTop: '10px', // Add some space above the links
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    padding: '10px',
    width: '100%', // Make links fill the width
    textAlign: 'center', // Center link text
    borderBottom: '1px solid #ddd', // Add separators between links (optional)
  },
  hamburgerButton: { // Style for the hamburger button
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30px',
    height: '20px',
    cursor: 'pointer',
    marginBottom: '10px', // Add some space below the button
  },
  hamburgerBar: {
    width: '100%',
    height: '3px',
    backgroundColor: '#333',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    display: 'none', // Hide desktop navigation by default
  }
};


export default function Header({ logoImage }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    navigate(`/search/${searchQuery}`);
    setSearchQuery('');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header style={styles.header}>
      <img src={logoImage} alt="Logo" style={styles.logo} />
      <div style={styles.searchContainer}>
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
      </div>

       {/* Hamburger menu for mobile */}
       <div style={styles.hamburgerButton} onClick={toggleMobileMenu}>
        <div style={styles.hamburgerBar} />
        <div style={styles.hamburgerBar} />
        <div style={styles.hamburgerBar} />
      </div>



      {/* Conditionally render the navigation links */}
      <nav style={isMobileMenuOpen ? styles.nav : styles.desktopNav}>
        <Link to="/" style={styles.link}>Now Playing</Link>
        <Link to="/upcoming" style={styles.link}>Upcoming</Link>
        <Link to="/top-rated" style={styles.link}>Top Rated</Link>
        <Link to="/popular" style={styles.link}>Popular</Link>
      </nav>
    </header>
  );
}