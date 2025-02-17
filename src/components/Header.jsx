import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS file

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
    marginBottom: '10px', // Space between search and links
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '5px',
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
    
    width: '100%', // Make links fill the width
    
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
    display: 'none',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    
  },
  
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

  const showNavLinks = () =>{
    if (window.innerWidth < 1200) {
      return isMobileMenuOpen ? { display: 'flex' } : { display: 'none' };
    } 
  }


  return (
    <header className='header'>
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
       <div className='hamburgerButton' onClick={toggleMobileMenu}>
        <div style={styles.hamburgerBar} />
        <div style={styles.hamburgerBar} />
        <div style={styles.hamburgerBar} />
      </div>



      {/* Conditionally render the navigation links */}
      <nav className='nav-links' style={showNavLinks()}>
        <Link to="/" style={styles.link}>Now Playing</Link>
        <Link to="/upcoming" style={styles.link}>Upcoming</Link>
        <Link to="/top-rated" style={styles.link}>Top Rated</Link>
        <Link to="/popular" style={styles.link}>Popular</Link>
      </nav>
    </header>
  );
}