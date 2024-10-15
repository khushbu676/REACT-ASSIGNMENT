import React from 'react';

const Navigation = ({ isLoggedIn, handleAuth }) => {
  return (
    <nav style={styles.nav}>
      <span>Navigation</span>
      <button style={styles.button} onClick={handleAuth}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#0965c7',
    padding: '10px',
    borderRadius: '10px',
    color: '#fff'
  },

  button: {
    backgroundColor: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '10px',
    cursor: 'pointer',
  }
};

export default Navigation;
