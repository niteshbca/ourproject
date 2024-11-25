import React from 'react';

const Header = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      gap: '15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#fff',
      fontSize: '18px',
    },
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    dropdownContent: {
      display: 'none',
      position: 'absolute',
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    dropdownHover: {
      display: 'block',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>MyApp</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>Home</a>
        <a href="/about" style={styles.navLink}>About</a>
        <a href="/contact" style={styles.navLink}>Contact</a>
        <div
          style={styles.dropdown}
          onMouseEnter={(e) => (e.currentTarget.children[1].style.display = 'block')}
          onMouseLeave={(e) => (e.currentTarget.children[1].style.display = 'none')}
        >
          <a href="#!" style={styles.navLink}>More</a>
          <div style={{ ...styles.dropdownContent, padding: '10px', borderRadius: '5px' }}>
            <a href="/services" style={{ ...styles.navLink, color: '#000', display: 'block' }}>
              Services
            </a>
            <a href="/faq" style={{ ...styles.navLink, color: '#000', display: 'block' }}>
              FAQ
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
